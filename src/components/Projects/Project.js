import project1 from '../Images/work-1.png';
import project2 from '../Images/work-2.png'
import project3 from '../Images/work-3.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from '../Datas/data.json'
import './Project.css';

function Project() {

    return (
        <div id="portfolio">
        <div className="container">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
                <div className="work">
                    <img src={project1} alt = ''/>
                    <div className="layer">
                        <h3>Social Media App </h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
                            aperiam blanditiis nam natus illo animi deserunt ratione modi fugit facilis officia placeat
                            sapiente.
                            Accusantium quaerat omnis eos, quae sed iste.</p>
                        <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src= {project2} alt = ''/>
                    <div className="layer">
                        <h3>Music App </h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
                            aperiam blanditiis nam natus illo animi deserunt ratione modi fugit facilis officia placeat
                            sapiente.
                            Accusantium quaerat omnis eos, quae sed iste.</p>
                        <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src= {project3} alt = ''/>
                    <div className="layer">
                        <h3>Online shopping App </h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
                            aperiam blanditiis nam natus illo animi deserunt ratione modi fugit facilis officia placeat
                            sapiente.
                            Accusantium quaerat omnis eos, quae sed iste.</p>
                        <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div id="work">
      <h2>WORK</h2>
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
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={i.url}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
            </div>
            <a href="https://github.com/sikendrakumarverma" className="btn">See More</a>
        </div>
    </div>
    )
}

export default Project;