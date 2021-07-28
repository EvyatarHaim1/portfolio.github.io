export const SWITCH_TO_DARKMODE = 'SWITCH_TO_DARKMODE';
export const FILTER_BY_PROJECT_TYPE = 'FILTER_BY_PROJECT_TYPE';

export const switchToDarkmode = (darkMode) => { return { type: SWITCH_TO_DARKMODE, payload: darkMode } }

export const filterByProjectType = (types) => { return { type: FILTER_BY_PROJECT_TYPE, payload: types } }
