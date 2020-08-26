import React from "react";
import { Dropdown } from "semantic-ui-react";

export default function MenuDropdown() {
  return (
    <Dropdown
      text="new branch"
      icon="code branch"
      labeled
      button
      className="icon"
      closeOnChange
      wrapSelection
    >
      <Dropdown.Menu>
        <Dropdown.Item text="Home" href={process.env.PUBLIC_URL + "/home"} />
        <Dropdown.Item text="About" href={process.env.PUBLIC_URL + "/about"} />
        <Dropdown.Item
          text="Contact"
          href={process.env.PUBLIC_URL + "/contact"}
        />
        <Dropdown.Item
          text="Portfolio"
          href={process.env.PUBLIC_URL + "/portfolio"}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}
