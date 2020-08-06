import React from "react";
import {
  Container,
  Header,
  Grid,
  Image,
  Segment,
  Button,
} from "semantic-ui-react";
import "./About.css";
import AboutMeBlurb from "../../components/AboutMe/AboutMe";
import profilePic from "../../components/AboutMe/profilePic.jpg";
import resume from "./resume.pdf";

export default function About() {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(resume);
  };
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
            <Button size="small" onClick={handleClick}>
              View my resume
            </Button>
          </Segment>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
