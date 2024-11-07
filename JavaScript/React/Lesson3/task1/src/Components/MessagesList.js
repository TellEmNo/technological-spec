import { useState } from "react";
import { Button } from "@mui/material";

export default function MessagesList() {
  const [messages, setMessages] = useState([]);
  const [counter, setCounter] = useState(1);

  const newMessage = `New message${counter > 1 ? 's' : ''}: ${counter}`;

  return (
    <div>
      <Button
        onClick={() => {
          setMessages((prevMessages) => [...prevMessages, newMessage]);
          setCounter((prevCounter) => prevCounter + 1);
        }}
        variant="contained"
      >
        Add message
      </Button>
      <ul>
        {messages.map((message, index) => (
          <li key={`message-${index}`}>{message}</li>
        ))}
      </ul>
    </div>
  );
}
