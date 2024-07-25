import React from "react";
import Logo from "../Logo";
import Searchbar from "../Searchbar";
import Login from "./Login";

function Header(){
  

return (
    <header>
      <nav>
        <div className="flex justify-evenly bg-slate-300 text-black items-center">
          <div className="">
            <Logo/>
          </div>
          <div>
          <Searchbar/>
          </div>
          <div><Login/></div>
          <div>Kart</div>
          <div>Become Seller</div>
          <div>Menu</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
