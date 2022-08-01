import React, { useContext } from "react";
import ModalsContext from "../../contexts/modals";
import LoginModal from "./LoginModal";

/**
 * ActiveModals is a wrapper to render all modal components
 */
function ActiveModals() {
  const [modalStates, setModalStates] = useContext(ModalsContext);

  return (
    <>
      <LoginModal
        open={modalStates.login}
        onClose={() => setModalStates({ modalName: "login", action: "close" })}
      />
    </>
  );
}

export default ActiveModals;
