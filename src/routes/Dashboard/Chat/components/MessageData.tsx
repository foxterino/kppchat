import React from 'react';

interface MessageDataProps {
  data: string;
}

export const MessageData: React.FC<MessageDataProps> = ({ data }) => {
  return <p>{data}</p>;
};
