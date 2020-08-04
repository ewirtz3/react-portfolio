import React from "react";
import { Dropdown, Header, Icon, Container, Menu } from "semantic-ui-react";
import "../assets/css/menuDropdown.css";

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
        <Dropdown.Item text="Home" href="/home" />
        <Dropdown.Item text="About" href="/about" />
        <Dropdown.Item text="Contact" href="/contact" />
        <Dropdown.Item text="Portfolio" href="/portfolio" />
      </Dropdown.Menu>
    </Dropdown>
  );
}
