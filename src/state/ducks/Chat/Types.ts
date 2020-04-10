import { getMessage } from './Actions';

export interface ChatState {
  chat: Chat;
}

export interface Chat {
  messages: Message[];
}

export interface Message {
  data: string;
  username: string;
}

export const ChatActions = {
  SEND_MESSAGE: 'SEND_MESSAGE',
  GET_MESSAGE: 'GET_MESSAGE'
};

export type GetMessage = ReturnType<typeof getMessage>;
