import React from "react";

function NavItem({ name, children, onClick }) {
  return (
    <li>
      <button
        className="flex flex-col items-center font-bold font-dm-sans hover:text-blue-800"
        onClick={onClick}
      >
        {children}
        {name}
      </button>
    </li>
  );
}

export default NavItem;
