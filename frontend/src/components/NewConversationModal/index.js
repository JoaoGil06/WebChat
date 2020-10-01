import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const NewConversationModal = ({ closeModal }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <Modal.Header closeButton>Criar nova conversa</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}></Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
