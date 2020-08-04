import React from "react";
import { Container, Image, Segment, Header, Icon } from "semantic-ui-react";
import "../assets/css/Welcome.css";

export default function Welcome() {
  return (
    <Container id="home">
      <Segment raised>
        <Image centered src={require("../assets/images/spain5.jpg")} circular />
        <Header as="h3" className="centered" id="name">
          emily wirtz
        </Header>
        <Header sub as="h5" className="centered">
          Full Stack Web Developer
          <Icon name="arrow alternate circle right outline" />
        </Header>
      </Segment>
    </Container>
  );
}
