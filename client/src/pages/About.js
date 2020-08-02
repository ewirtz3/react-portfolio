import React from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import "../assets/css/About.css";

export default function About() {
  return (
    <Container>
      <Grid id="about-me" rows={3}>
        <Grid.Row>
          <Header size="large">About Me</Header>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
