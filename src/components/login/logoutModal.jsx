import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import CustomModal from "../../common/customModal";

class LogOutModal extends Component {
  closeModal = () => {
    this.props.history.goBack();
  };

  render() {
    console.log("", "iam in");
    const title = (
      <div>
        <strong style={{ fontSize: "33px" }}>
          &nbsp;&nbsp;Attention Required.{" "}
        </strong>
      </div>
    );

    const body = (
      <>
        <div className="d-flex justify-content-start">hello</div>
      </>
    );

    const options = (
      <>
        <button type="button" handleClick={this.closeModal}>
          Close
        </button>
      </>
    );
    const modalProps = {
      title,
      body,
      options,
    };

    return <CustomModal closeModal={this.closeModal} {...modalProps} />;
  }
}

LogOutModal.propTypes = {
  history: PropTypes.object,
};

export default connect()(LogOutModal);
