import { SWITCH_TO_DARKMODE, FILTER_BY_PROJECT_TYPE } from "./setting.action";

const initialState = {
    darkmode: false,
    reactjs: true,
    reactNative: true,
    unity: true,
    wordpress: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_TO_DARKMODE:
            return {
                ...state,
                darkmode: action.payload
            }
        case FILTER_BY_PROJECT_TYPE:
            if (action.payload === 'reactjs')
                return {
                    ...state,
                    reactjs: !state.reactjs
                }
            if (action.payload === 'reactNative')
                return {
                    ...state,
                    reactNative: !state.reactNative
                }
            if (action.payload === 'unity')
                return {
                    ...state,
                    unity: !state.unity
                }
            if (action.payload === 'wordpress')
                return {
                    ...state,
                    wordpress: !state.wordpress
                }
        default:
            return state;
    }
};