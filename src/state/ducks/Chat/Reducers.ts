import { createReducer } from '@reduxjs/toolkit';
import { ChatActions, Chat, GetMessage } from './Types';

const initialState: Chat = {
  messages: []
};

export const chatReducer = createReducer(initialState, {
  [ChatActions.GET_MESSAGE]: (state, action: GetMessage) => ({
    ...state,
    messages: [...state.messages, action.payload]
  })
});
