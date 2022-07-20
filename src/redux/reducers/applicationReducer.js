import { MANAGE_APPLICATION } from "../constants";

const initialState = {
    openItem: ['dashboard'],
    openComponent: 'buttons',
    drawerOpen: false,
    componentDrawerOpen: true,
};

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case MANAGE_APPLICATION.OPEN_ITEM:
            return {
                ...state,
                openItem: action.openItem
            };
        case MANAGE_APPLICATION.OPEN_COMPONENT:
            return {
                ...state,
                openComponent: action.openComponent
            };
        case MANAGE_APPLICATION.DRAWER_OPEN:
            return {
                ...state,
                drawerOpen: action.drawerOpen
            };
        case MANAGE_APPLICATION.COMPONENT_DRAWER_OPEN:
            return {
                ...state,
                componentDrawerOpen: action.componentDrawerOpen
            };
        default:
            return state;
    }
}

export { applicationReducer };
