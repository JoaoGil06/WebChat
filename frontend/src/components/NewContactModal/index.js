import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../../contexts/ContactsProvider";

const NewContactModal = ({ closeModal }) => {
  const idRef = useRef();
  const nameRef = useRef();

  const { createContact } = useContacts();

  function handleSubmit(e) {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  }
  return (
    <>
      <Modal.Header
        closeButton
        style={{ background: "#2b2b2b", color: "white" }}
      >
        Adicionar novo contacto
      </Modal.Header>
      <Modal.Body style={{ background: "#2b2b2b", color: "white" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>

          <Button type="submit">Adicionar</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewContactModal;
