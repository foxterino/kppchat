import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { Container, Row, Button } from 'shards-react';
import { Chat } from './Chat';
import { FriendList } from './FriendList';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from '../../state/ducks/Auth';
import { Message, RoomsMessage } from '../../state/ducks/Chat/Types';
import { getMessage, updateRooms, chatSelectors } from '../../state/ducks/Chat';
import { ChatEvents } from '../../commons/types';
import { socketUrl } from '../../api';
import './style.css';

export const Dashboard: React.FC = () => {
  const username = useSelector(authSelectors.username);
  const currentRoom = useSelector(chatSelectors.currentRoom);

  const [isJoined, setJoined] = useState(false);

  const dispatch = useDispatch();

  const onMessage = (messageEvent: MessageEvent) => {
    const message: RoomsMessage | Message = JSON.parse(messageEvent.data);

    if (message.event === ChatEvents.message && message.room === currentRoom) {
      dispatch(getMessage(message));
    }

    if (message.event === ChatEvents.roomsUpdate) {
      dispatch(updateRooms(message.rooms));
    }
  };

  const { sendJsonMessage } = useWebSocket(socketUrl, { onMessage });

  const sendMessage = (data: string) => {
    sendJsonMessage({
      event: ChatEvents.message,
      data,
      username,
      room: currentRoom,
      date: Date.now()
    });
  };

  const joinChat = () => {
    sendJsonMessage({ event: ChatEvents.join, username });
    setJoined(true);
  };

  return (
    <Container className="dashboard">
      {isJoined ? (
        <Row className="dashboard-content">
          <FriendList />
          <Chat sendMessage={sendMessage} />
        </Row>
      ) : (
        <Button onClick={joinChat} pill className="dashboard-join-btn">
          Join
        </Button>
      )}
    </Container>
  );
};
