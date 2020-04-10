import React from 'react';

interface MessageAuthorProps {
  username: string;
}

export const MessageAuthor: React.FC<MessageAuthorProps> = ({ username }) => {
  return <p>{username}:</p>;
};
