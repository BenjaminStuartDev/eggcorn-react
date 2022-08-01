import React, { useState } from "react";
import ModalsContext from "../contexts/modals";
import useModalsReducer from "../hooks/reducers/ModalsReducer";

/**
 * GlobalContext is a wrapper to combine all contexts into one component
 *
 * @param {HTML} children child components
 */
function GlobalContexts({ children }) {
  const [modalStates, setModalStates] = useModalsReducer({
    login: false,
  });
  const [loading, setLoading] = useState(false);

  // Used to render loading while useEffects is fetching the user information
  if (loading) {
    return <>Loading...</>;
  }

  return (
    <ModalsContext.Provider value={[modalStates, setModalStates]}>
      {children}
    </ModalsContext.Provider>
  );
}

export default GlobalContexts;
