import React from "react";

import "./menu-item.styles.scss";

// const MenuItem = ({ title, imageUrl, size }) => (
//   <div className={`${size} menu-item`}>
//     <div
//       className="background-image"
//       style={{
//         backgroundImage: `url(${imageUrl})`,
//       }}
//     />
//     <div className="content">
//       <h1 className="title">{title.toUpperCase()}</h1>
//       <span className="subtitle">SHOP NOW</span>
//     </div>
//   </div>
// );

// export default MenuItem;

// import React, { Component } from "react";

// export default class MenuItem extends Component {
//   render() {
//     return (
//       <div>
//         <h1>ab to chal jana chahiye</h1>
//       </div>
//     );
//   }
// }

function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
