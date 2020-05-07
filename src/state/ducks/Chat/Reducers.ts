import { createReducer } from '@reduxjs/toolkit';
import {
  ChatActions,
  Chat,
  GetMessage,
  UpdateRooms,
  SwitchRoom
} from './Types';

const initialState: Chat = {
  messages: [],
  rooms: [],
  currentRoom: ''
};

export const chatReducer = createReducer(initialState, {
  [ChatActions.GET_MESSAGE]: (state, action: GetMessage) => ({
    ...state,
    messages:
      state.currentRoom === action.payload.room
        ? [...state.messages, action.payload]
        : state.messages
  }),
  [ChatActions.UPDATE_ROOMS]: (state, action: UpdateRooms) => ({
    ...state,
    rooms: action.payload
  }),
  [ChatActions.SWITCH_ROOM]: (state, action: SwitchRoom) => ({
    ...state,
    messages: [],
    currentRoom: action.payload
  })
});
