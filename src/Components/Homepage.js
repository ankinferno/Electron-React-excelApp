import React, { Component } from "react";
import FileSelect from "./FileSelect";
import SingleRecord from './SingleRecord';

class Homepage extends Component {
    state = {
        name: "",
        path: "",
        size: "",
        jsonData: ""
    };

    constructor(props) {
        super(props);
        this.sometext = ":( no";
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name) {
            console.log("State updated: in parent");
            this.sometext = "<p>YEahs</p>";
            console.log(" value in sometext now : ", this.sometext);
        }
    }

    checkExcel = f => {
        console.log("the data passed and caught div y prarent homepage : ", f);
        this.setState({
            name: f.name,
            path: f.path,
            size: f.size,
            jsonData: f.jsonData
        });
    };

    render() {
        return (
            <React.Fragment>
                <div style={{ margintop: "5px" }} className="container">
                    <FileSelect SelectedExcel={this.checkExcel} />
                </div>
                <hr />
                <div className="container">
                    {this.state.name === "" ? (
                        <p>nothing selected yet</p>
                    ) : (

                            <div style={{ "width": "100%" }} className="row">
                                <div className="column">name : {this.state.name}</div >
                                <div className="column">path  : {this.state.path}</div >
                                <div className="column">size : {this.state.size}</div >
                            </div>

                        )}
                    <hr />
                </div>

                <div className="jumbotron container" style={{ height: "100%" }}>

                    {this.state.name === "" ? (
                        <p></p>
                    ) : (

                            <div className="border border-dark">
                                //show column for entering into and search
                                <SingleRecord />
                            </div>

                        )}

                </div>
            </React.Fragment>
        );
    }
}
export default Homepage;
