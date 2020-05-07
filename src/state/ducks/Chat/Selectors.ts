import { ChatState } from './Types';

const all = (state: ChatState) => state.chat;
const messages = (state: ChatState) => all(state).messages;
const rooms = (state: ChatState) => all(state).rooms;
const currentRoom = (state: ChatState) => all(state).currentRoom;

export const chatSelectors = { all, messages, rooms, currentRoom };
