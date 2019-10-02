import React from "react";
import SocialButton from "../socialButton/github/socialBtn";

import "./copyright.css";

export default class Copyright extends React.Component {
  render() {
    return (
      <div className="copyright shadow">
        <div className="heading">Full Stack Development</div>
        <div className="sub-heading">@Doublelayer</div>
        <div className="content">
          Willkomen zu einem Twitter M.E.R.N Stack Clone ich freue mich darüber, wenn du mir einen Tweet hinterlassen würdest! Happy
          Hacking!
        </div>
        <hr />
        <div>
          <div className="heading">Folge mir:</div>
          <SocialButton />
        </div>
      </div>
    );
  }
}
