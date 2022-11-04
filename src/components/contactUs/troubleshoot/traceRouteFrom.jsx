import React from "react";
import Input from "../../../common/input";
import Card, { CardItem, CardLit } from "../../../common/card";

class TraceRoute extends React.Component {
  render() {
    const { pattern } = this.props;
    return (
      <CardLit>
        <form className="form-horizontal">
          <CardItem item="header">
            <CardItem item={"text"}>TraceRoute Form</CardItem>
          </CardItem>
          <CardItem item="body">
            <div className="form-group">
              <Input
                name={"domain"}
                type={"text"}
                children={"Domain"}
                pattern={pattern}
                title={"Enter the correct ip address"}
              />
            </div>
          </CardItem>
          <CardItem item="footer">
            <button className="btn btn-info col-sm-3 offset-sm-9">
              Trace Route
            </button>
          </CardItem>
        </form>
      </CardLit>
    );
  }
}

export default TraceRoute;
