import React, { useState, ChangeEvent, FormEvent } from 'react';
import { InputGroup, FormInput, InputGroupAddon, Button } from 'shards-react';
import '../style.css';

interface MessageInputProps {
  sendMessage: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    sendMessage(message);
    setMessage('');
  };

  return (
    <InputGroup className="message-input">
      <FormInput
        value={message}
        onChange={handleChange}
        placeholder="Write a message..."
        id="message-field"
        type="text"
      />
      <InputGroupAddon type="append">
        <Button onClick={handleSend} type="submit">
          Send
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};
