import React, { useContext } from "react";
import ModalsContext from "../../contexts/modals";
import LoginIcon from "../icons/LoginIcon";
import LogoutIcon from "../icons/LogoutIcon";
import NavItem from "./NavItem";

function RHSNavWrapper() {
  const { setModalStates } = useContext(ModalsContext);
  
  
  return (
    <ul className="flex p-2 space-x-4">
      <NavItem name="login" onClick={() => setModalStates({ modalName: "login", action: "open" })}>
        <LoginIcon />
      </NavItem>
      <NavItem name="logout">
        <LogoutIcon/>
      </NavItem>
    </ul>
  );
}

export default RHSNavWrapper;
