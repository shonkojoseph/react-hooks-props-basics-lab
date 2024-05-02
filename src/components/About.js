import React from "react";
import Links from "./Links"
function About(props) {
 
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>Put the bio in here</p> */}
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      {props.Links && <Links {...props.Links} />}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
