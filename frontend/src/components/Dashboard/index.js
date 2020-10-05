import React from "react";

import Sidebar from "../Sidebar";
import OpenedConversation from "../OpenedConversation";
import { useConversations } from "../../contexts/ConversationsProvider";
const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();

  console.log(selectedConversation);
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenedConversation />}
    </div>
  );
};

export default Dashboard;
