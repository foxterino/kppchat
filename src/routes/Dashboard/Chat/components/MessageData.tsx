import React from 'react';
import '../style.css';

interface MessageDataProps {
  data: string;
}

export const MessageData: React.FC<MessageDataProps> = ({ data }) => {
  return <p className="message-data">{data}</p>;
};
