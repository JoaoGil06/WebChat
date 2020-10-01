import React, { useState } from "react";
import { Tab, Nav, Button } from "react-bootstrap";

import Conversations from "../Conversations";
import Contacts from "../Contacts";

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState("conversations");
  const conversationsOpen = activeKey === "conversations";

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
        <div className="p-2 border-top border-right small">
          O teu ID: <span className="text-muted">{id}</span>
        </div>
        <Button className="rounded-0">
          Nova {conversationsOpen ? "Conversa" : "Contacto"}
        </Button>
      </Tab.Container>
    </div>
  );
};

export default Sidebar;
