import project1 from '../Images/work-1.png';
import project2 from '../Images/work-2.png'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Project.css';
import Projects from './AllProjects';

function Project() {

  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="work-list">
          <div className="work">
            <img src={project1} alt='' />
            <div className="layer">
              <h3>Book Store </h3>
              <p>Created a bookstore website for sell and buy books by MERN technology. Used JWT for authentication & authorization, 
              AWS S3 for storing books covers.</p>
              <a href="https://booksstore-sikendrakumarverma.vercel.app/"><i className="fa-solid fa-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src={project2} alt='' />
            <div className="layer">
              <h3>Live Chatting App </h3>
              <p>Created a real-time-chat app like whatsapp for communication. Used socket.io for
                connect backend and client.</p>
              <a href="https://batekare.onrender.com/"><i className="fa-solid fa-up-right-from-square"></i></a>
            </div>
          </div>
          <div id="work">
            <Projects />
          </div>

        </div>
        <a href="https://github.com/sikendrakumarverma" className="btn">See More</a>
      </div>
    </div>
  )
}

export default Project;