import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WebSocketHelper from '../../../commons/helpers/WebSocketHelper/WebSocketHelper';
import { MessageList } from './components/MessageList';
import { MessageForm } from './components/MessageForm';
import { authSelectors } from '../../../state/ducks/Auth';
import { getMessage } from '../../../state/ducks/Chat';
import { Message } from '../../../state/ducks/Chat/Types';

export const Chat = () => {
  const username = useSelector(authSelectors.username);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleMessage = (message: Message) => dispatch(getMessage(message));

    WebSocketHelper.subscribe(handleMessage);

    return () => {
      WebSocketHelper.unsubscribe();
    };
  }, [dispatch]);

  const sendMessage = (message: string) => {
    WebSocketHelper.send({ data: message, username });
  };

  return (
    <main>
      <MessageForm sendMessage={sendMessage} />
      <MessageList />
    </main>
  );
};
