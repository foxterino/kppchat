import React from 'react';
import { Col } from 'shards-react';
import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import './style.css';
import { useSelector } from 'react-redux';
import { chatSelectors } from '../../../state/ducks/Chat';

interface ChatProps {
  sendMessage: (message: string) => void;
}

export const Chat: React.FC<ChatProps> = ({ sendMessage }) => {
  const currentRoom = useSelector(chatSelectors.currentRoom);

  return (
    <Col lg="9">
      {currentRoom ? (
        <>
          <MessageInput sendMessage={sendMessage} />
          <MessageList />
        </>
      ) : (
        <div>Select chat first</div>
      )}
    </Col>
  );
};
