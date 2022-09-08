import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // const linkElements = links.map((link) => {
  //   return <a key={link} href={link}>{link}</a>
  // })

  return <nav>
    {/* {linkElements} */}
    <a key={links[0]} href='#home'>{links[0]}</a>
    <a key={links[1]} href='#about'>{links[1]}</a>
    <a key={links[2]} href='#projects'>{links[2]}</a>
  </nav>;
}

export default NavBar;
