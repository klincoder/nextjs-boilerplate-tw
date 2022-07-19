// Import resources
import { atom, selector, selectorFamily } from "recoil";

// ATOMS
// APP SETTINGS ATOM
export const appSettingsAtom = atom({
  key: "appSettingsAtom",
  default: null,
});

// CMS MENU ATOM
export const cmsMenuAtom = atom({
  key: "cmsMenuAtom",
  default: false,
});

// ALL USERS ATOM
export const allUsersAtom = atom({
  key: "allUsersAtom",
  default: [],
});

// USER ATOM
export const userAtom = atom({
  key: "userAtom",
  default: null,
});
