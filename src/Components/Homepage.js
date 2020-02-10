import React, { Component } from "react";
import FileSelect from "./FileSelect";
import { Link } from 'react-router-dom'

class Homepage extends Component {
    state = {
        name: "",
        path: "",
        size: "",
        columnlist: [],
        FileObject: {}
    };

    constructor(props) {
        super(props);
        this.flag = false;
        this.Options = []
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name) {
            console.log("\nState updated: in parent");
            console.log("state in homepage: ", this.state);
            this.flag = true;
            console.log("columnlist in homepage: ", this.state.columnlist, "\n type is : ", typeof (this.state.columnlist));
            console.log("columnlist[0] in homepage: ", this.state.columnlist[0]);

        }
    }

    checkExcel = f => {
        console.log("the data passed and caught div y prarent homepage : ", f);
        this.setState({
            name: f.name,
            path: f.path,
            size: f.size,
            columnlist: [...f.Columns],
            FileObject: f.FileObject
        });

        this.Options = f.Columns;

    };

    //created SingleRecord for work , but couldnt pass props

    render() {
        return (
            <React.Fragment>
                <br></br>
                <br></br>
                <div className="container">
                    <FileSelect SelectedExcel={this.checkExcel} style={{}} />
                </div>

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
                </div>

                <div className="jumbotron container">

                    {this.state.name.length > 3 ? <React.Fragment>

                        <ul className="list-group-horizontal-sm">


                            {
                                this.state.columnlist.map((item, index) => (
                                    <li className="list-group-item" key={item}>
                                        {item}</li>
                                ))
                            }
                        </ul>


                        <hr />
                        <li>
                            <Link to={{
                                pathname: "/Record",
                                state: {
                                    data: this.state.columnlist,
                                    File: this.state.FileObject
                                }

                            }}>Find students record</Link>
                        </li>
                    </React.Fragment> : <p>could nt do</p>}




                </div>
            </React.Fragment >
        );
    }
}
export default Homepage;
