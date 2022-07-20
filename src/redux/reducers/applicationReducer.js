import { MANAGE_APPLICATION } from "../constants";

const initialState = {
    applications: [],
};

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {

        case MANAGE_APPLICATION.LIST:
            return {
                ...state,
                applications: action.applications
            };
        default:
            return state;
    }
}

export { applicationReducer };
