import React from "react";
import { CardItem, CardLit } from "../../../common/card";
import Column from "../../../common/column";
import Dropdownlist from "../../../common/dropDown";
import Input from "../../../common/input";
import { postApi } from '../../../actions/postApi'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
      selectedSubmenuValue: "",
    };
  }
  handleSelect = (e) => {
    e.preventDefault();
    this.setState({ selectedValue: e.target.value });
  };
  handleSubSelect = (e) => {
    e.preventDefault();
    this.setState({ selectedSubmenuValue: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const dropdownList = [
      "Select an option...",
      "IT",
      "Dongle",
      "Telephone",
      "Internet",
    ];
    const IT = ["Select an option...", "Laptop", "Battery", "Charger"];
    const Dongle = ["Select an option...", "Datacard", "Dongle issue"];
    const Telephone = ["Select an option...", "Headphone"];
    const Internet = ["Select an option...", "Access", "Wifi"];
    let type;
    switch (this.state.selectedValue) {
      case "IT": {
        type = IT;
        break;
      }
      case "Dongle": {
        type = Dongle;
        break;
      }
      case "Internet": {
        type = Internet;
        break;
      }
      case "Telephone": {
        type = Telephone;
        break;
      }
      default:
        type = [];
    }
    if (this.state.selectedSubmenuValue == "Select an option...") {
      type = [];
    }
    console.log("state : ", this.state.selectedValue);
    console.log("subState : ", this.state.selectedSubmenuValue);
    return (
      <>
        <CardItem item="body">
          <div className="row">
            <Column span={6}>
              <CardLit>
                <form
                  className="form-horizontal"
                  onSubmit={(e) => this.handleSubmit(e)}
                >
                  <CardItem item={"header"}>
                    <CardItem item={"text"}>Form</CardItem>
                  </CardItem>
                  <CardItem item={"body"}>
                    <div className="form-group">
                      <Dropdownlist
                        name={"dropdown"}
                        children={"Issue Type"}
                        dropdown={dropdownList}
                        handleSelect={(e) => this.handleSelect(e)}
                      />
                    </div>
                    <div className="form-group">
                      <Dropdownlist
                        name={"subdropdown"}
                        children={"Sub Type"}
                        dropdown={type}
                        handleSelect={(e) => this.handleSubSelect(e)}
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        children={"Time"}
                        type={"datetime-local"}
                        name={"startdate"}
                        id={"startdate"}
                      />
                    </div>
                  </CardItem>
                  <CardItem item={"footer"}>
                    <button
                      className="btn btn-secondary col-sm-3                    "
                      type="reset"
                    >
                      Reset
                    </button>
                    <button className="btn btn-info col-sm-3 offset-sm-6" onClick={() => this.props.postApi({name:this.state.selectedValue, job: this.state.selectedSubmenuValue})}>
                      Generate
                    </button>
                  </CardItem>
                </form>
              </CardLit>
            </Column>
            <Column span={6}>
              <CardLit>
                <CardItem item={"header"}>
                  <CardItem item={"text"}>Result</CardItem>
                </CardItem>
                <CardItem item={"body"}>
                  <div>{/* {content} */}</div>
                </CardItem>
              </CardLit>
            </Column>
          </div>
        </CardItem>
      </>
    );
  }
}

const mapStateToProps =(state) => {
     return {posts : state.posts}
}

Status.propTypes ={
}


export default connect(mapStateToProps, {postApi}) (Status)

