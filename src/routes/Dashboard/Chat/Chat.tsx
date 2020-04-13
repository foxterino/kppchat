import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MessageList } from './components/MessageList';
import { MessageForm } from './components/MessageForm';
import { authSelectors } from '../../../state/ducks/Auth';
import { getMessage } from '../../../state/ducks/Chat';
import { Message } from '../../../state/ducks/Chat/Types';
import { WebSocketHelper } from '../../../commons/helpers/WebSocketHelper';

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

  const sendMessage = (data: string) => {
    WebSocketHelper.send({ data, username, date: Date.now() });
  };

  return (
    <main>
      <MessageForm sendMessage={sendMessage} />
      <MessageList />
    </main>
  );
};
