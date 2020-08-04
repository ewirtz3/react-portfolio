import React from "react";
import { Container, Header, Grid, Image, Segment } from "semantic-ui-react";
import "../assets/css/About.css";
import AboutMeBlurb from "../components/AboutMe/AboutMe";
import profilePic from "../components/AboutMe/profilePic.jpg";

export default function About() {
  return (
    <Container>
      <Grid id="about-me" rows={2}>
        <Grid.Row>
          <Header size="large" id="about-header">
            About Me
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Segment raised>
            <Image
              src={profilePic}
              size="medium"
              id="profile-pic"
              //
              floated="left"
            />
            <AboutMeBlurb />
          </Segment>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
