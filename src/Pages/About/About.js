import React from "react";
import Card from "react-bootstrap/Card";
const About = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://i.postimg.cc/KvnQKTYJ/reactjs-javascript-programming-programming-language-hd-wallpaper-preview.jpg"
        alt="ReactJs"
      />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
