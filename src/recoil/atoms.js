// Import resources
import { atom, selector, selectorFamily } from "recoil";

// ATOMS
// APP SETTINGS ATOM
export const appSettingsAtom = atom({
  key: "appSettingsAtom",
  default: null,
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
