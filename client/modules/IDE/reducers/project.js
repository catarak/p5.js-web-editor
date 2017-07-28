import generate from 'project-name-generator';
import * as ActionTypes from '../../../constants';
import isSecurePage from '../../../utils/isSecurePage';

const initialState = () => {
  const generatedString = generate({ words: 2 }).spaced;
  const generatedName = generatedString.charAt(0).toUpperCase() + generatedString.slice(1);
  return {
    name: generatedName,
    serveSecure: isSecurePage(),
    updatedAt: ''
  };
};

const project = (state, action) => {
  if (state === undefined) {
    state = initialState(); // eslint-disable-line
  }
  switch (action.type) {
    case ActionTypes.SET_SERVE_SECURE:
      return Object.assign({}, { ...state }, { serveSecure: action.serveSecure });
    case ActionTypes.SET_PROJECT_NAME:
      return Object.assign({}, { ...state }, { name: action.name });
    case ActionTypes.NEW_PROJECT:
      return {
        id: action.project.id,
        name: action.project.name,
        updatedAt: action.project.updatedAt,
        serveSecure: action.project.serveSecure,
        owner: action.owner
      };
    case ActionTypes.SET_PROJECT:
      return {
        id: action.project.id,
        name: action.project.name,
        updatedAt: action.project.updatedAt,
        serveSecure: action.project.serveSecure,
        owner: action.owner
      };
    case ActionTypes.RESET_PROJECT:
      return initialState();
    case ActionTypes.SHOW_EDIT_PROJECT_NAME:
      return Object.assign({}, state, { isEditingName: true });
    case ActionTypes.HIDE_EDIT_PROJECT_NAME:
      return Object.assign({}, state, { isEditingName: false });
    case ActionTypes.SET_PROJECT_SAVED_TIME:
      return Object.assign({}, state, { updatedAt: action.value });
    default:
      return state;
  }
};

export default project;
