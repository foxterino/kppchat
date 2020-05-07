import { createAction } from '@reduxjs/toolkit';
import { ChatActions, Message } from './Types';

export const getMessage = createAction(
  ChatActions.GET_MESSAGE,
  (message: Message) => ({ payload: message })
);

export const updateRooms = createAction(
  ChatActions.UPDATE_ROOMS,
  (rooms: string[]) => ({ payload: rooms })
);

export const switchRoom = createAction(
  ChatActions.SWITCH_ROOM,
  (newRoom: string) => ({ payload: newRoom })
);
