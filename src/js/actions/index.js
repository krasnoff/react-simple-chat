import { ADD_CHAT } from "../constants/action-types";

export function addChat(payload) {
    return { type: ADD_CHAT, payload }
};