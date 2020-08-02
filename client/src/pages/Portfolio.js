import React from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import PortfolioCards from "../components/PortfolioCards";

export default function Portfolio() {
  return (
    <Container id="portfolio-container">
      <Segment raised centered id="portfolio-segment">
        <Header size="large" id="portfolio-header">
          Portfolio
        </Header>
        <Portfolio />
      </Segment>
    </Container>
  );
}
