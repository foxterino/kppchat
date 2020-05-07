import React from 'react';
import { Col } from 'shards-react';
import { useSelector, useDispatch } from 'react-redux';
import { chatSelectors, switchRoom } from '../../../state/ducks/Chat';
import { isNil } from '../../../commons/Utility';
import './style.css';

interface FriendListProps {}

export const FriendList: React.FC<FriendListProps> = ({}) => {
  const rooms = useSelector(chatSelectors.rooms);
  const currentRoom = useSelector(chatSelectors.currentRoom);
  const dispatch = useDispatch();

  const handleSwitchRoom = (newRoom: string) => () => {
    return dispatch(switchRoom(newRoom));
  };

  return (
    <Col>
      {isNil(rooms) ? (
        <EmptyFriendList />
      ) : (
        <ul className="friend-list">
          {rooms.map((room, index) => (
            <li
              key={index}
              onClick={handleSwitchRoom(room)}
              className={`friend-item ${
                currentRoom === room ? 'is-active' : ''
              }`}
            >
              {room}
            </li>
          ))}
        </ul>
      )}
    </Col>
  );
};

const EmptyFriendList = () => <div>There are no dialogs yet</div>;
