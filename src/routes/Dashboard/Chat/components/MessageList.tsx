import React from 'react';
import { useSelector } from 'react-redux';
import { chatSelectors } from '../../../../state/ducks/Chat';
import { MessageAuthor } from './MessageAuthor';
import { MessageData } from './MessageData';
import { isNil } from '../../../../commons/Utility';

export const MessageList: React.FC = () => {
  const messages = useSelector(chatSelectors.messages);

  return isNil(messages) ? (
    <EmptyMessageList />
  ) : (
    <ul>
      {messages.map(({ data, username }, index) => {
        const prevIndex = Math.max(0, index - 1);
        const { username: prevUsername } = messages[prevIndex];
        const shouldDisplayUsername = !index || username !== prevUsername;

        return (
          <li key={index}>
            {shouldDisplayUsername && <MessageAuthor username={username} />}
            <MessageData data={data} />
          </li>
        );
      })}
    </ul>
  );
};

const EmptyMessageList = () => {
  return <div>There are no messages yet.</div>;
};
