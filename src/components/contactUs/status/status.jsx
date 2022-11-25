import React from "react";
import Card, { CardItem, CardLit } from "../../../common/card";
import Column from "../../../common/column";
import Dropdownlist from "../../../common/dropDown";
import Input from "../../../common/input";
import { postForm } from "../../../actions/postForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../../../common/loader";
import PrintButton from "../../../common/printButton";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
      selectedSubmenuValue: "",
      desc: "",
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
  handleDescription = (e) => {
    e.preventDefault();
    this.setState({ desc: e.target.value });
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

    let { posts } = this.props;
    let { fetched, requested } = posts;
    let resultContent, priority;
    priority =
      this.state.selectedValue == "IT"
        ? "high"
        : this.state.selectedValue == "Internet"
        ? "Medium"
        : "Low";
    if (requested) {
      resultContent = <Loader />;
    } else if (fetched) {
      let bg =
        posts.result.Category == "IT"
          ? "bg-danger"
          : posts.result.Category == "Internet"
          ? "bg-warning"
          : "bg-secondary";
      resultContent = (
        <>
          <Card background={bg}>
            <CardItem item="header">
              Priority : <strong>{priority}</strong>
            </CardItem>
            <CardItem item="body">
              Category : {posts.result.Category}
              <br />
              Subcategory : {posts.result.Subcategory}
              <br />
            </CardItem>
            <CardItem item="footer">
              Description :
              <br />
              {posts.result.descrpiton}
            </CardItem>
          </Card>
        </>
      );
    } else {
      resultContent = "";
    }
    console.log("state : ", this.state.selectedValue);
    console.log("subState : ", this.state.selectedSubmenuValue);
    return (
      <>
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
                    <label className="col-sm-3" htmlFor={"desc"}>
                      Description
                    </label>
                    <textarea
                      className="form-control col-sm-12"
                      cols={70}
                      rows={2}
                      onChange={(e) => this.handleDescription(e)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <Input
                      children={"Priority"}
                      type={"text"}
                      name={"priority"}
                      id={"priority"}
                      value={priority}
                      readonly={true}
                      disabled={true}
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
                  <button
                    className="btn btn-info col-sm-3 offset-sm-6"
                    onClick={() =>
                      this.props.postForm({
                        Category: this.state.selectedValue,
                        Subcategory: this.state.selectedSubmenuValue,
                        Descrpiton: this.state.desc,
                      })
                    }
                  >
                    Create
                  </button>
                </CardItem>
              </form>
            </CardLit>
          </Column>
          <Column span={6}>
            <CardLit>
              <CardItem item={"header"}>
                <CardItem item={"text"}>Tickets</CardItem>
              </CardItem>
              <CardItem item={"body"}>
                <div>{resultContent}</div>
              </CardItem>
              <CardItem item="footer">
                <PrintButton
                  refsToPrint={posts.result}
                  disabled={fetched}
                ></PrintButton>
              </CardItem>
            </CardLit>
          </Column>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

Status.propTypes = {
  postForm: PropTypes.func,
  posts: PropTypes.object,
};

export default connect(mapStateToProps, { postForm })(Status);
