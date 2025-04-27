import { useState } from "react";
import photo from "../Images/photo.jpg";
import "./About.css";

function About() {
  const [active, setActive] = useState({
    skill: true,
    experience: false,
    education: false,
  });
  const [activeTab, setActiveTab] = useState({
    skill: "active-tab",
    experience: "",
    education: "",
  });
  const [activeLink, setActiveLink] = useState({
    skill: "active-links",
    experience: "",
    education: "",
  });

  const handleClick = (clickedTab) => {
    if (clickedTab === "skill") {
      setActive({
        ...active,
        skill: true,
        education: false,
        experience: false,
      });
      setActiveLink({
        ...activeLink,
        skill: "active-links",
        experience: "",
        education: "",
      });
      setActiveTab({
        ...activeTab,
        education: "",
        skill: "active-tab",
        experience: "",
      });
    } else if (clickedTab === "experience") {
      setActive({
        ...active,
        skill: false,
        education: false,
        experience: true,
      });
      setActiveLink({
        ...activeLink,
        experience: "active-links",
        skill: "",
        education: "",
      });
      setActiveTab({
        ...activeTab,
        education: "",
        skill: "",
        experience: "active-tab",
      });
    } else {
      setActive({
        ...active,
        skill: false,
        education: true,
        experience: false,
      });
      setActiveLink({
        ...activeLink,
        education: "active-links",
        skill: "",
        experience: "",
      });
      setActiveTab({
        ...activeTab,
        education: "active-tab",
        skill: "",
        experience: "",
      });
    }
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={photo} alt="" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title"> About Me</h1>
            <p>
              My self <span>Sikendra Kumar Verma</span>, I have done Bachelor in
              Electrical from Jharkhand Rai University. I have a deep interest
              in Software Development, So now I am currently working as a{" "}
              <span>Backend Developer</span> at{" "}
              <span>ByzWiz Infratech Pvt Ltd.</span>
            </p>

            <div className="tab-title">
              <p
                className={`tab-links ${activeLink.skill} `}
                onClick={() => handleClick("skill")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeLink.experience}`}
                onClick={() => handleClick("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeLink.education}`}
                onClick={() => handleClick("education")}
              >
                Education
              </p>
            </div>

            {active.skill ? (
              <div className={`tab-contents ${activeTab.skill}`} id="skills">
                <ul>
                  <li>
                    <span>Back-End Developer</span>
                    <br />
                    Developing Back-End API's by using NodeJs, JavaScript, TypeScript,
                    ExpressJs, MongoDB, AWS-S3, Redis, Cache, Postman, Git and
                    GitHub.
                  </li>
                  <li>
                    <span>Front-End Developer</span>
                    <br />
                    Developing Front-End Interfaces by using ReactJs, HTML,
                    CSS, Bootstrap, MUI.
                  </li>
                  <li>
                    <span>MERN-Stack-Developer</span>
                    <br />
                    Developing fully responsive website by using NodeJs,
                    JavaScript, TypeScript, noSQL, AWS, Firebase, Redis-Cache,
                    ReactJs, Redux, HTML, CSS, Bootstrap, MUI, Figma.
                  </li>
                </ul>
              </div>
            ) : null}
            {active.experience ? (
              <div
                className={`tab-contents ${activeTab.experience}`}
                id="experience"
              >
                <ul>
                  <li>
                    <span>Oct 2023 - Current</span>
                    <br />
                    ByzWiz Infratech Pvt. Ltd.{" "}
                  </li>
                  <li>
                    <span>April 2023 - Oct 2023</span>
                    <br />
                    StackLab.in{" "}
                  </li>
                  <li>
                    <span>July 2022 - April 2023</span>
                    <br />
                    FunctionUp{" "}
                  </li>
                  <li>
                    <span>March 2022 - July 2022 </span>
                    <br />
                    Kinetic Process Technology India PVT. LTD.{" "}
                  </li>
                  <li>
                    <span>Feb 2021 - March 2021 </span>
                    <br /> CCL Barka Syal Area Bhurkunda, At Mine-A{" "}
                  </li>
                </ul>
              </div>
            ) : null}
            {active.education ? (
              <div
                className={`tab-contents ${activeTab.education}`}
                id="education"
              >
                <ul>
                  <li>
                    <span>Degree(2018-2022)</span>
                    <br /> Jharkhand Rai University(B.Tech-EE){" "}
                  </li>
                  <li>
                    <span>Intermediate(2016-2018)</span>
                    <br /> +2 High School Plaunjia{" "}
                  </li>
                  <li>
                    <span>Schooling(2014-2016) </span>
                    <br />S S High School Bharkatta{" "}
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
