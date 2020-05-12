import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'shards-react';
import { Chat } from './Chat';
import { FriendList } from './FriendList';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from '../../state/ducks/Auth';
import { ChatService } from '../../service/Chat';
import { Message, RoomsMessage } from '../../state/ducks/Chat/Types';
import { getMessage, updateRooms, chatSelectors } from '../../state/ducks/Chat';
import { ChatEvents } from '../../commons/types';
import './style.css';

export const Dashboard: React.FC = () => {
  const username = useSelector(authSelectors.username);
  const currentRoom = useSelector(chatSelectors.currentRoom);

  const [isJoined, setJoined] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleMessage = (message: Message) => {
      if (message.room === currentRoom) {
        dispatch(getMessage(message));
      }
    };

    const handleRoomsUpdate = (message: RoomsMessage) => {
      dispatch(updateRooms(message.rooms));
    };

    ChatService.subscribe({ handleMessage, handleRoomsUpdate });

    return () => {
      ChatService.unsubscribe();
    };
  }, [dispatch, currentRoom]);

  const sendMessage = (data: string) => {
    ChatService.send({
      data,
      username,
      date: Date.now(),
      event: ChatEvents.message,
      room: currentRoom
    });
  };

  const joinChat = () => {
    ChatService.send({ event: ChatEvents.join, username });
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
