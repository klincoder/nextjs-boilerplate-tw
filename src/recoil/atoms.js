// Import resources
import { atom, selector, selectorFamily } from "recoil";

// Import custom files
import { otpDefaultTimer } from "../config/data";

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

// CMS MENU ATOM
export const cmsMenuAtom = atom({
  key: "cmsMenuAtom",
  default: false,
});

// OTP TIMER ATOM
export const otpTimerAtom = atom({
  key: "otpTimerAtom",
  default: otpDefaultTimer,
});
