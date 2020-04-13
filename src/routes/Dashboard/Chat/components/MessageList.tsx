import React from 'react';
import { useSelector } from 'react-redux';
import { MessageData } from './MessageData';
import { chatSelectors } from '../../../../state/ducks/Chat';
import { isNil } from '../../../../commons/Utility';
import { formatMessageDate } from '../../../../commons/DateUtilities';

export const MessageList: React.FC = () => {
  const messages = useSelector(chatSelectors.messages);

  return isNil(messages) ? (
    <EmptyMessageList />
  ) : (
    <ul>
      {messages.map(({ data, username, date }, index) => {
        const prevIndex = Math.max(0, index - 1);
        const { username: prevUsername } = messages[prevIndex];
        const shouldDisplayUsername = !index || username !== prevUsername;

        return (
          <li key={index}>
            {shouldDisplayUsername && <p>{username}:</p>}
            <div>
              <p>{formatMessageDate(date)}</p>
              <MessageData data={data} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const EmptyMessageList = () => {
  return <div>There are no messages yet.</div>;
};
