import i18next from 'i18next';
import apiClient from '../../../utils/apiClient';
import * as ActionTypes from '../../../constants';


function updatePreferences(formParams, dispatch) {
  console.log('updating preferences');
  apiClient.put('/preferences', formParams)
    .then(() => {
    })
    .catch((error) => {
      const { response } = error;
      dispatch({
        type: ActionTypes.ERROR,
        error: response.data
      });
    });
}

export function setFontSize(value) {
  return (dispatch, getState) => { // eslint-disable-line
    dispatch({
      type: ActionTypes.SET_FONT_SIZE,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          fontSize: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setLineNumbers(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_LINE_NUMBERS,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          lineNumbers: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAutosave(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_AUTOSAVE,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          autosave: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setLinewrap(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_LINEWRAP,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          linewrap: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setLintWarning(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_LINT_WARNING,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          lintWarning: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setTextOutput(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_TEXT_OUTPUT,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          textOutput: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setGridOutput(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_GRID_OUTPUT,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          gridOutput: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setSoundOutput(value) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_SOUND_OUTPUT,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          soundOutput: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setTheme(value) {
  // return {
  //   type: ActionTypes.SET_THEME,
  //   value
  // };
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_THEME,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          theme: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAutorefresh(value) {
  // return {
  //   type: ActionTypes.SET_AUTOREFRESH,
  //   value
  // };
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_AUTOREFRESH,
      value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          autorefresh: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

export function setAllAccessibleOutput(value) {
  return (dispatch) => {
    dispatch(setTextOutput(value));
    dispatch(setGridOutput(value));
    dispatch(setSoundOutput(value));
  };
}

export function setLanguage(value) {
  console.log(`ACTION_PREFERENCE: set language to db ${value}`);
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.SET_LANGUAGE,
      language: value
    });
    const state = getState();
    if (state.user.authenticated) {
      const formParams = {
        preferences: {
          language: value
        }
      };
      updatePreferences(formParams, dispatch);
    }
  };
}

