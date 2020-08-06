import React from "react";
import { Button, Form, Container, TextArea, Segment } from "semantic-ui-react";
import "./Contact.css";

export default function Contact() {
  return (
    <Container>
      <Segment centered raised id="contact-segment">
        <Form size="big">
          <Form.Input label="name" control="input" placeholder="Your name" />
          <Form.Input
            label="email"
            control="input"
            placeholder="Your email address"
          />
          <Form.Field
            control={TextArea}
            label="message"
            placeholder="Your message"
          />
          <Form.Field control={Button} content="Submit" basic color="yellow" />
        </Form>
      </Segment>
    </Container>
  );
}
