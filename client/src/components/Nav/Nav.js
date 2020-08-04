import React from "react";
import { Header, Grid, Icon } from "semantic-ui-react";
import "../assets/css/Nav.css";
import MenuDropdown from "../MenuDropdown/MenuDropdown";

function Nav() {
  return (
    <Grid textAlign="center" id="nav">
      <Grid.Row columns={3} verticalAlign="bottom">
        <Grid.Column>
          <Header size="huge" id="emily">
            <Icon name="code" size="large" id="code" />
            emily wirtz
          </Header>
        </Grid.Column>
        <Grid.Column />
        <Grid.Column>
          <MenuDropdown />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Nav;
