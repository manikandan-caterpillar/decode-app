import { MANAGE_APPLICATION } from "../constants";

const setApplicationAction = applications => {
  return {
    type: MANAGE_APPLICATION.LIST,
    applications
  };
};

export {
  setApplicationAction
};
