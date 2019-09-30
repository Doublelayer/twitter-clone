import React from "react";
import TwitterButton from "../socialButton/twitter/socialTwitterBtn";

import "./copyright.css";

export default class Copyright extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="copyright">
        <div className="heading">Full Stack Development</div>
        <div className="sub-heading">@Doublelayer</div>
        <div className="content">
          Willkomen zu einem Twitter MERN-Stack Clone ich freue mich darüber, wenn du mir einen Tweet hinterlassen würdest! Happy Hacking!
        </div>
        <hr />
        <div>
          <div className="heading">Follow Me:</div>
          <TwitterButton />
          <TwitterButton />
        </div>
      </div>
    );
  }
}
