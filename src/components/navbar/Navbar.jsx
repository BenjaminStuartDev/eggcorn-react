import React from "react";
import EggCornLogo from "../icons/EggCornLogo";
import LHSNavWrapper from "./LHSNavWrapper";
import RHSNavWrapper from "./RHSNavWrapper";

function Navbar() {
  return (
    <nav className="sticky top-0 flex items-center place-content-between z-50 p-2">
      <LHSNavWrapper />
      <EggCornLogo
        classProps={"hover:fill-slate-700 fill-slate-500 stroke-slate-500"}
      />
      <RHSNavWrapper />
    </nav>
  );
}

export default Navbar;
