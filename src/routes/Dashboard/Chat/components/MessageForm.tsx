import React, { useState } from 'react';
import { Field } from '../../../../commons/components/Field';

interface MessageFormProps {
  sendMessage: (message: string) => void;
}

export const MessageForm: React.FC<MessageFormProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    sendMessage(message);
    setMessage('');
  };

  return (
    <form>
      <Field
        value={message}
        onChange={handleChange}
        label="Message field"
        id="message-field"
        type="text"
      />
      <input value="Send" onClick={handleSend} type="submit" />
    </form>
  );
};
