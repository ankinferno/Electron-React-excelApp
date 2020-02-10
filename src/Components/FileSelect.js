import React from "react";
import XLSX from "xlsx";
class FileSelect extends React.Component {
  state = {
    name: "",
    path: "",
    size: "",
    jsonData: "",
    Columns: [],
    FileObject: {}
  };

  sendDataToParent = () => {
    if (this.state.name !== "" || this.state.name !== false) {
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
    console.log("FIle got is : \n", f);
    console.log("file type :", typeof f);

    var columnList;
    var newthis = this;

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

      columnList = dataParse[0];
      newthis.setState({
        Columns: columnList,
        name: f.name,
        path: f.path,
        size: f.size,
        FileObject: f
      });
    };
    reader.readAsBinaryString(f);
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              onChange={this.readExcel}
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              className="custom-file-input"
              id="inputGroupFile02"
            />
            <label
              className="custom-file-label"
              for="inputGroupFile02"
              aria-describedby="inputGroupFileAddon02"
            >
              Choose file
            </label>
          </div>
          <div className="input-group-append">
            <span
              onClick={this.sendDataToParent}
              className="input-group-text"
              id="inputGroupFileAddon02"
            >
              Upload
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FileSelect;
