import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './AllProjects.css'
import data from "../Datas/data.json";
import Blogging from './Images/Blogging.jpg'
import Internship from './Images/Internship.webp'
import Book_management from './Images/Book_management.avif'
import Url from './Images/Url.avif'
import Shopping from './Images/Shopping.webp'
import Coaching from './Images/Coaching.jpg'
import Live from './Images/Live.webp'
import Video from './Images/Video.jpg'
import Firebase from './Images/Firebase.webp'
import Book_store from './Images/Book_store.jpg'
import Portfolio from './Images/Portfolio.jpg'


const images = [Blogging, Internship, Book_management, Url, Shopping, Coaching, Live, Video, Firebase, Book_store, Portfolio]

const Projects = () => {
  return (
    <div className="projects">
      {/* <h2>WORK</h2> */}
      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((details,i) => (
              <div key={details.title} className="workItem">
                <img src={images[i]} alt={details.title} />
                <aside>
                  <h4>{details.title}</h4>
                  <p>{details.description}</p>
                  {/* <a target={"blank"} href={i.url}> */}
                  <a href={details.url}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Projects;