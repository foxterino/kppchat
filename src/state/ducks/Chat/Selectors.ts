import { ChatState } from './Types';

export const all = (state: ChatState) => state.chat;
export const messages = (state: ChatState) => all(state).messages;
