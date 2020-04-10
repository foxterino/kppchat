import { createAction } from '@reduxjs/toolkit';
import { ChatActions, Message } from './Types';

export const getMessage = createAction(
  ChatActions.GET_MESSAGE,
  (message: Message) => ({ payload: message })
);
