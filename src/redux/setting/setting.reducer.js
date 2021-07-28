import { SWITCH_TO_DARKMODE } from "./setting.action";

const initialState = {
    darkmode: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_TO_DARKMODE:
            return {
                ...state,
                darkmode: action.payload
            }
        default:
            return state;
    }
};