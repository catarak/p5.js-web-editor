import React from 'react';

class TextOutput extends React.Component {
  componentDidMount() {
    this.canvasTextOutput.focus();
  }
  render() {
    return (
      <section
        className="text-output"
        id="canvas-sub"
        ref={(element) => { this.canvasTextOutput = element; }}
        tabIndex="0"
        aria-label="text-output"
        title="canvas text output"
      >
        <h2> Output </h2>
        <section id="textOutput-content">
        </section>
        <p
          tabIndex="0"
          role="main"
          id="textOutput-content-summary"
          aria-label="text output summary"
        >
        </p>
        <table
          tabIndex="0"
          role="main"
          id="textOutput-content-table"
          aria-label="text output details"
        >
        </table>
        <div
          tabIndex="0"
          role="main"
          id="textOutput-content-details"
          aria-label="text output details"
        >
        </div>
      </section>
    );
  }
}

export default TextOutput;
