import React from "react";
import { Container, Image, Segment, Header, Icon } from "semantic-ui-react";
import "./Welcome.css";
import spain from "./spain5.jpg";

export default function Welcome() {
  return (
    <Container id="home">
      <Segment raised textAlign="center">
        <Image centered src={spain} circular />
        <Header as="h3" id="name">
          emily wirtz
        </Header>
        <Header sub as="h5">
          Full Stack Web Developer
          <a href={process.env.PUBLIC_URL + "/about"}>
            <Icon
              link
              size="large"
              name="arrow alternate circle right outline"
              color="teal"
            />
          </a>
        </Header>
      </Segment>
    </Container>
  );
}