import React from "react";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section
          style={{
            backgroundColor: "skyblue",
            position: "absolute",
            top: 0,
            width: "100%",
            height: "2.5rem"
          }}
        >
          <p>Welcome</p>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
