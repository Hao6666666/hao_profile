import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1_1 from "../assets/img/project1_1.jpg";
import project1_2 from "../assets/img/project1_2.jpg";
import project1_3 from "../assets/img/project1_3.jpg";
import project1_4 from "../assets/img/project1_4.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Tokyo Weather Info",
      description: "API implementation",
      imgUrl: project1_1,
    },
    {
      title: "San FranciscoWeather Info",
      description: "API implementation",
      imgUrl: project1_2,
    },
    {
      title: "Seattle Weather Info",
      description: "API implementation",
      imgUrl: project1_3,
    },
    {
      title: "London Weather Info",
      description: "API implementation",
      imgUrl: project1_4,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my personal projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="wrapper">
                        <h4>My Web Blog project</h4>
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/VHajbSA8sVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>This project implemented an interactive UI via HTML, CSS, Bootstrap and Angular.js. Realized the get, post, update and delete functions using Flask and Python. Built an account-base login system for user privacy. Designed a NoSQL database to save users' information and deployed the DB on cloud using MongoDB. Deployed the full-stack web app on Heroku.</p>
                      </div>
        
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="wrapper">
                        <h4>Mini Shopping Search Engine</h4>
                        <p>Built an amazon-like searching Interface and deployed on Heroku. Constructed an automatic Web Scraping System to crawl data via Scrapy, Splash and Selenium. Decoded the javascript code using XPath and wrapped data via JSON onto MongoDB.Gathered current user's location. 
                          Presented weather related information through weather API and surrounded recommended restaurants using Yelp API. Used HTML, CSS, Javascript and Angular.js to build the website. Improved user experience by caching user search history in client side and autocompletion </p>
                      </div>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="wrapper">
                        <h4>Pedestrian Trajectory Detection and Analysis based on Mask R-CNN</h4>
                        <iframe width="455" height="808" src="https://www.youtube.com/embed/G_WN4laHP8o" title="Bayesian estimation and tracking algorithms" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>This project implemented Mask R-CNN machine learning algorithm in Python by Keras and TensorFlow. Conducted Instance Segmentation for pedestrian detection and behavior analysis via Mask R-CNN algorithm. Calculated pedestrian centroid via Image Moments algorithm by OpenCV. Tracked pixel-wise pedestrian trajectory and analyzed behavior successfully. Increased training and testing accuracy by deploying project on could computing platform Pitt@CRC - Center For Research Computing and analyzed the influence of COVID-19 on crowds activities.</p>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
