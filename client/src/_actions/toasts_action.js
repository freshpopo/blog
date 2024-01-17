import {TOAST_UI} from "./types";

export function useToast(toastContent) {
  return {
    type: TOAST_UI,
    toastContent
  }
}