// import React from "react";

// import "./homepage.styles.scss";

// const HomePage = () => (
//   <div className="homepage">
//     <Directory />
//   </div>
// );

// export default HomePa
import React, { Component } from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}
