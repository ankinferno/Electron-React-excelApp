import React from "react";
import XLSX, { workbook } from "xlsx";
class FileSelect extends React.Component {
  state = {
    name: "",
    path: "",
    size: "",
    jsonData: ""
  };

  sendDataToParent = () => {
    if (this.state.name !== "" || this.state.name != false) {
      console.log("sending data to parent");
      var Exceldata = this.state;
      this.props.SelectedExcel(Exceldata);
    } else {
      alert("select file");
    }
  };

  onChangeHandler = event => {
    console.log("changes made\n", event.target);
  };

  readExcel = e => {
    e.preventDefault();

    var files = e.target.files,
      f = files[0];
    this.setState({ ...this.state, name: f.name, path: f.path, size: f.size });
    console.log("FIle got is : \n", f);

    var reader = new FileReader();
    reader.onload = function(e) {
      var data = e.target.result;
      let readedData = XLSX.read(data, { type: "binary" });
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];

      /* Convert array to json*/
      const dataParse = XLSX.utils.sheet_to_json(ws, {
        header: 1
      });

      if (dataParse !== undefined || dataParse !== "") {
        console.log(
          "\x1b[31m%s\x1b[0m",
          "the json to work with is :\n",
          dataParse.length,
          "\n"
        );

        dataParse.forEach(element => {
          if (element[0] === "Enterprise" && element[4] == "2665.50") {
            console.log("record got is ", element);
          }
        });
      }

      // setFileUploaded(dataParse);
    };
    reader.readAsBinaryString(f);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container jumbotron ">
          <label>Please select Excel Sheet</label>
          <br />
          <input
            type="file"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={this.readExcel}
          ></input>

          <button onClick={this.sendDataToParent}>Start</button>
        </div>
      </React.Fragment>
    );
  }
}

export default FileSelect;
