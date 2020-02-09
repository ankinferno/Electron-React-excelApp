import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section
          style={{
            backgroundColor: "lightblue",
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "2.5rem"
          }}
        >
          <p style={{ marginTop: "10px" }}>© 2020 , Ubermenscher</p>
        </section>
      </React.Fragment>
    );
  }
}

export default Footer;
