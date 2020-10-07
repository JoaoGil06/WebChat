import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";

import Conversations from "../Conversations";
import Contacts from "../Contacts";
import NewConversationModal from "../NewConversationModal";
import NewContactModal from "../NewContactModal";

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState("conversations");
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === "conversations";

  function openModal() {
    setModalOpen(true);
  }

  function modalClose() {
    setModalOpen(false);
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="conversations">Conversas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contacts">Contactos</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey="conversations">
            <Conversations />
          </Tab.Pane>

          <Tab.Pane eventKey="contacts">
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div
          className="p-2 border-top border-right small"
          style={{ color: "white" }}
        >
          O teu ID: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={openModal} className="rounded-0">
          Nova {conversationsOpen ? "Conversa" : "Contacto"}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={modalClose}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={modalClose} />
        ) : (
          <NewContactModal closeModal={modalClose} />
        )}
      </Modal>
    </div>
  );
};

export default Sidebar;
