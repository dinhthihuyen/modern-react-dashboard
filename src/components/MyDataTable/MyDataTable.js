import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class MyDataTable extends Component {
  render() {
    const {dataFromParent} = this.props;
    console.log("dataFromParent", dataFromParent.length);
    return (
      <ReactTable
        // title="Users Table"
        columns={this.props.data1}
        data={dataFromParent}
        // button={true}
        // striped={true}
        // selectableRows={true}
        // pagination={true}
        // paginationPerPage={15}
      />
    )
  }
}


export default MyDataTable;