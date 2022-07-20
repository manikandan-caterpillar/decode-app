import { MANAGE_APPLICATION } from "../constants";

const activeItem = openItem => {
  return {
    type: MANAGE_APPLICATION.OPEN_ITEM,
    openItem,
  };
};

const activeComponent = openComponent => {
  return {
    type: MANAGE_APPLICATION.OPEN_COMPONENT,
    openComponent,
  };
};

const openDrawer = drawerOpen => {
  return {
    type: MANAGE_APPLICATION.DRAWER_OPEN,
    drawerOpen,
  };
};

const openComponentDrawer = componentDrawerOpen => {
  return {
    type: MANAGE_APPLICATION.COMPONENT_DRAWER_OPEN,
    componentDrawerOpen,
  };
};

export {
  activeItem,
  activeComponent,
  openDrawer,
  openComponentDrawer,
};
