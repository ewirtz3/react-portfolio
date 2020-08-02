import React, { useState } from "react";
import { Header, Menu, Grid } from "semantic-ui-react";
import "../assets/css/Nav.css";

function Nav() {
  const [activeItem, setActiveItem] = useState({
    activeItem: "home",
  });

  return (
    <Grid columns={3} textAlign="center" id="nav">
      <Grid.Row>
        <Grid.Column>
          <Header size="huge" id="emily">
            <i class="fas fa-code"></i>
            <span> </span>emily wirtz
          </Header>
        </Grid.Column>
        <Grid.Column />
        <Grid.Column>
          <Menu secondary position="right" id="menu">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={() => {
                setActiveItem({
                  activeItem: "home",
                });
              }}
            />
            <Menu.Item
              name="portfolio"
              active={activeItem === "portfolio"}
              onClick={() => {
                setActiveItem({
                  activeItem: "portfolio",
                });
              }}
            />
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={() => {
                setActiveItem({
                  activeItem: "contact",
                });
              }}
            />
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Nav;
