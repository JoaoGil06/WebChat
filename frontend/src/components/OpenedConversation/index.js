import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const OpenedConversation = () => {
  const [text, setText] = useState("");

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">Conversa Aberta</div>
      <Form>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
            />
            <InputGroup.Append>
              <Button type="submit">Enviar</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default OpenedConversation;
