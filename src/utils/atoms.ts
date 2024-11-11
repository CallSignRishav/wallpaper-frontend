import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai/vanilla";

export const darkModeAtom = atomWithStorage("darkMode", true);

export const userAtom = atom({});
