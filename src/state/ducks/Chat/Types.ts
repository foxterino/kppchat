import { getMessage, updateRooms, switchRoom } from './Actions';
import { ChatEvents } from '../../../commons/types';

export interface ChatState {
  chat: Chat;
}

export interface Chat {
  messages: Message[];
  rooms: string[];
  currentRoom: string;
}

export interface Message {
  data: string;
  username: string;
  date: number;
  event: ChatEvents.message;
  room: string;
}

export interface RoomsMessage {
  event: ChatEvents.roomsUpdated;
  rooms: string[];
}

export const ChatActions = {
  SEND_MESSAGE: 'SEND_MESSAGE',
  GET_MESSAGE: 'GET_MESSAGE',
  UPDATE_ROOMS: 'UPDATE_ROOMS',
  SWITCH_ROOM: 'SWITCH_ROOM'
};

export type GetMessage = ReturnType<typeof getMessage>;
export type UpdateRooms = ReturnType<typeof updateRooms>;
export type SwitchRoom = ReturnType<typeof switchRoom>;
