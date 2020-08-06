import React from "react";
import { Container, Header, Grid, Image, Segment } from "semantic-ui-react";
import "./About.css";
import AboutMeBlurb from "../../components/AboutMe/AboutMe";
import profilePic from "../../components/AboutMe/profilePic.jpg";
import resume from "./resume.pdf";

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
              floated="left"
            />
            <AboutMeBlurb />
            <Header size="small">
              <a
                href={process.env.PUBLIC_URL + resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View my resume
              </a>
            </Header>
          </Segment>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
