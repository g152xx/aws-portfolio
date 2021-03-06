import React, { useContext } from "react";
import classes from "./SideProjects.module.css";
import { ThemeContext } from "../../Shared/contexts/ThemeContext";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import MovieRecording from "../../assets/videos/movieRecording.mov";
import KoffeeRecording from "../../assets/videos/koffeeRecording.mov";
import JobsRecording from "../../assets/videos/jobsRecording.mov";
import TrelloRecording from "../../assets/videos/trelloRecording.mov";
const SideProjects = () => {
  AOS.init({
    delay: 200
  });

  return (
    <div>
      <div className={classes.SideProjectItemFirst}>
        {" "}
        <div className={classes.ProjectItemInfo}>
          <p className={classes.ProjectName}> Movie Nerd</p>
          <p className={classes.ProjectItemBio}>
            Movie Nerd was created to allows users to find out anything and
            everything about any particular movie. On this website you can see
            an updated list of the current top movies and current top comedies.
            There's also a feature in which you can search for any particular
            movie and find out more information on it. Built with
            React/Material-UI.
          </p>{" "}
          <div className={classes.LinkContainer}>
            <a
              className={classes.ProjectLink}
              href="https://movie-nerd-d5f1a.web.app/"
              target="_blank"
            >
              <LanguageIcon />
            </a>
            <a
              className={classes.GitHubLink}
              href="https://github.com/epicoding95/movie-nerd"
              target="_blank"
            >
              <GitHubIcon />
            </a>{" "}
          </div>
        </div>
        <div className={classes.ImageContainer}>
          <video width="375px" height="375px" controls>
            <source src={MovieRecording} type="video/mp4" />
          </video>
          {/* <img
            style={{ maxHeight: "375x", maxWidth: "375px" }}
            src={require("../../assets/images/movieNerdImage.png")}
            alt="codeimage"
          /> */}
        </div>
      </div>

      <div className={classes.SideProjectItemSecond}>
        {" "}
        <div className={classes.ImageContainer}>
          <video width="375px" height="375px" controls>
            <source src={KoffeeRecording} type="video/mp4" />
          </video>
          {/* <img
            style={{ maxHeight: "375x", maxWidth: "375px" }}
            src={require("../../assets/images/koffeetran.png")}
            alt="codeimage"
          /> */}
        </div>
        <div className={classes.ProjectItemInfo}>
          <p className={classes.ProjectName}> Kelar's Koffee</p>
          <p className={classes.ProjectItemBio}>
            My own version of a coffee shop in which users can go through the
            whole process of signing up to checking out and getting a
            confirmation email. Built with React, email.js, MongoDB, Node,
            Express.
          </p>{" "}
          <p className={classes.SlowWebsiteTag}>
            Please allow up to 20-30 seconds to load, the server is hosted on a
            free plan so it take's a little bit of time to be served :)
          </p>
          <div className={classes.LinkContainer}>
            <a
              className={classes.ProjectLink}
              href="https://kelarskoffee.herokuapp.com/"
              target="_blank"
            >
              <LanguageIcon />
            </a>
            <a
              className={classes.GitHubLink}
              href="https://github.com/epicoding95/MERN-store"
              target="_blank"
            >
              <GitHubIcon />
            </a>{" "}
          </div>
        </div>
      </div>

      <div className={classes.SideProjectItemFirst}>
        {" "}
        <div className={classes.ProjectItemInfo}>
          <p className={classes.ProjectName}> Developer Jobs</p>
          <p className={classes.ProjectItemBio}>
            Developer Jobs was created for software developers who are looking
            for a job, this website allows users to see many different jobs in
            the industry and shows all of the information needed to apply for
            this job. Built with GraphQL, Apollo Client, and React.
          </p>{" "}
          <div className={classes.LinkContainer}>
            <a
              className={classes.ProjectLink}
              href="https://job-search-8385a.firebaseapp.com/"
              target="_blank"
            >
              <LanguageIcon />
            </a>
            <a
              className={classes.GitHubLink}
              href="https://github.com/epicoding95/Developer-Jobs"
              target="_blank"
            >
              <GitHubIcon />
            </a>{" "}
          </div>
        </div>
        <div className={classes.ImageContainer}>
          <video width="375px" height="375px" controls>
            <source src={JobsRecording} type="video/mp4" />
          </video>
          {/* <img
            style={{ maxHeight: "375x", maxWidth: "375px" }}
            src={require("../../assets/images/JobsWebsiteImage.png")}
            alt="codeimage"
          /> */}
        </div>
      </div>
      <div className={classes.SideProjectItemSecond}>
        {" "}
        <div className={classes.ImageContainer}>
          <video width="375px" height="375px" controls>
            <source src={TrelloRecording} type="video/mp4" />
          </video>
          {/* <img
            style={{ maxHeight: "375x", maxWidth: "375px" }}
            src={require("../../assets/images/trellotrans.png")}
            alt="codeimage"
          /> */}
        </div>
        <div className={classes.ProjectItemInfo}>
          <p className={classes.ProjectName}> Reda's Forgetful List v2</p>
          <p className={classes.ProjectItemBio}>
            My own Trello replica that can be used to assign yourself tasks to
            do, built with React and React DnD
          </p>{" "}
          <div className={classes.LinkContainer}>
            <a
              className={classes.ProjectLink}
              href="https://trello-52052.web.app/"
              target="_blank"
            >
              <LanguageIcon />
            </a>
            <a
              className={classes.GitHubLink}
              href="https://github.com/epicoding95/RFL-Trello"
              target="_blank"
            >
              <GitHubIcon />
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProjects;
