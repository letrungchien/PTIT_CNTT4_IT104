<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";

export default function BlogLayout() {
  return (
    <>
      <div className="left" style={{
        height:"100vh",
        width:"20%",
        border:"1px solid red"
      }}>
        {/*header */}
        <div className="header">My Blog</div>
        <div className="siderba">
          <NavLink to={"#"}>Posts</NavLink>
        </div>
        <div className="footer">&copy; 2025 My Blog</div>
      </div>
    </>
  );
=======
import React from "react";
import { NavLink } from "react-router-dom";

export default function BlogLayout() {
  return (
    <>
      <div className="left" style={{
        height:"100vh",
        width:"20%",
        border:"1px solid red"
      }}>
        {/*header */}
        <div className="header">My Blog</div>
        <div className="siderba">
          <NavLink to={"#"}>Posts</NavLink>
        </div>
        <div className="footer">&copy; 2025 My Blog</div>
      </div>
    </>
  );
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
}