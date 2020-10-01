import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import { ContactsProvider } from "./contexts/ContactsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");
  return (
    <>
      {id ? (
        <ContactsProvider>
          <Dashboard id={id} />{" "}
        </ContactsProvider>
      ) : (
        <Login onIdSubmit={setId} />
      )}
    </>
  );
}

export default App;
