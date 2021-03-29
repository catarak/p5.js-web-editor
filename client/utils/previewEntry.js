import loopProtect from 'loop-protect';
import { Hook, Decode, Encode } from 'console-feed';
import evaluateExpression from './evaluateExpression';

window.loopProtect = loopProtect;

const consoleBuffer = [];
const LOGWAIT = 500;
Hook(window.console, (log) => {
  consoleBuffer.push({
    log
  });
});
setInterval(() => {
  if (consoleBuffer.length > 0) {
    const message = {
      messages: consoleBuffer,
      source: 'sketch'
    };
    window.parent.postMessage(message, window.origin);
    consoleBuffer.length = 0;
  }
}, LOGWAIT);

function handleMessageEvent(e) {
  if (window.origin !== e.origin) return;
  const { data } = e;
  const { source, messages } = data;
  if (source === 'console' && Array.isArray(messages)) {
    const decodedMessages = messages.map((message) => Decode(message.log));
    decodedMessages.forEach((message) => {
      const { data: args } = message;
      const { result, error } = evaluateExpression(args);
      const resultMessages = [
        { log: Encode({ method: error ? 'error' : 'result', data: [result] }) }
      ];
      window.parent.postMessage(
        {
          messages: resultMessages,
          source: 'sketch'
        },
        window.origin
      );
    });
  }
}

window.addEventListener('message', handleMessageEvent);
