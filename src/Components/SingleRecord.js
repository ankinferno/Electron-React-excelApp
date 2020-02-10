import React, { Component } from "react";
import { Link } from "react-router-dom";
import XLSX from "xlsx";

class SingleRecord extends Component {
  state = {
    ColumnOptionsList: [],
    flag: false,
    ResultFlag: false,
    Result: "",
    SelectedFile: {},
    Segment: "",
    Units: ""
  };
  constructor(props) {
    super(props);
    this.XData = [];
  }
  componentDidMount() {
    if (this.props.location.state != undefined) {
      const { data, File } = this.props.location.state;
      if (data) {
        console.log("new data got : singleRecord", data);
        this.setState({ XData: [...data], flag: true, SelectedFile: File });
      }
    }
  }

  handleEvent = event => {
    event.preventDefault();

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  FinalRecords = dataParse => {
    console.log(
      "\ninside final process to get records : ",
      typeof dataParse,
      dataParse
    );
    dataParse.forEach(element => {
      if (element[0] == this.state.Segment && element[4] == this.state.Units) {
        console.log("* record found_ ", element);
        this.setState({
          ...this.state,
          Result: [...this.state.Result, element],
          ResultFlag: true
        });
      }
    });
  };

  GetResults = e => {
    e.preventDefault();
    console.log("the state now is : ", this.state);
    const f = this.state.SelectedFile;
    console.log("FIle got is : SingleRecord \n", f);

    var newthis = this;
    var dataParse;

    var reader = new FileReader();
    reader.onload = function(e) {
      var data = e.target.result;
      let readedData = XLSX.read(data, { type: "binary" });
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];

      /* Convert array to json*/
      dataParse = XLSX.utils.sheet_to_json(ws, {
        header: 1
      });

      console.log(
        "\nthe data from file has been converted : ",
        dataParse.length
      );
      if (dataParse.length > 2) {
        newthis.FinalRecords(dataParse);
      }
    };
    reader.readAsBinaryString(f);
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: "2.5rem" }}>
          <p> this will do something.</p>

          {this.state.flag ? (
            <div className="border ">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Segment</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Segment"
                      name="Segment"
                      onChange={this.handleEvent}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4">Units</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Units Sold"
                      name="Units"
                      onChange={this.handleEvent}
                    />
                  </div>
                </div>

                <button onClick={this.GetResults}>Sumit</button>
              </form>
            </div>
          ) : (
            <p>no data now </p>
          )}

          <Link to="/" style={{ position: "absolute", bottom: "5rem" }}>
            Home
          </Link>
        </div>

        <ul className="list-group-horizontal-sm">
          {this.state.ResultFlag ? (
            <div className="card">
              {this.state.Result.map(item => (
                <li className="list-group-item" key={item}>
                  Segment :{item.Segment} , country : {item.Country}
                </li>
              ))}
            </div>
          ) : (
            <p> not found any record</p>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default SingleRecord;
