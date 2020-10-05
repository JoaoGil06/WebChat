import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import { ContactsProvider } from "./contexts/ContactsProvider";
import { ConversationsProvider } from "./contexts/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");
  return (
    <>
      {id ? (
        <ContactsProvider>
          <ConversationsProvider>
            <Dashboard id={id} />{" "}
          </ConversationsProvider>
        </ContactsProvider>
      ) : (
        <Login onIdSubmit={setId} />
      )}
    </>
  );
}

export default App;
