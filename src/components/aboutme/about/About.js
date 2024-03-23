import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Pruthvi S </b> 
                  and I am a <b className="purple">Computer Science and Technology </b> 
                    student at <b className="purple">Dayananda Sagar University </b>
                      in Kudlugate, Banglore.
                <br />
                <br />
                        I am proficient in various programming languages such as &nbsp;
                  <b className="purple">
                    {" "}
                    C, Java, Python, HTML, CSS, and JavaScript.{" "}
                  </b>
                <br />
                <br />
                I also have experience working with frameworks, libraries and Databases such as &nbsp;

                  <b className="purple">
                    {" "}
                    ReactJS, Streamlit, Flask, Pandas, NumPy, Matplotlib, MySQL and also experienced in Machine Learning and its algorthms.{" "}
                  </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                  <b className="purple">
                    {" "}
                    Python, Machine Learning, Deep Learning and also Generative AI.
                  </b>
                <br />
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                  <b className="purple">Watching Tech Talks, Movies etc</b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
