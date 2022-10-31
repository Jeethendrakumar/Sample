import React from "react";
import Input from "../../../common/input";
import Card, { CardItem } from "../../../common/card";

class TraceRoute extends React.Component {
  render() {
    return (
      <Card>
        <form className="form-horizontal">
          <CardItem item="header">
            <CardItem item={"text"}>TraceRoute Form</CardItem>
          </CardItem>
          <CardItem item="body">
            <div className="form-group">
              <Input name={"domain"} type={"text"} children={"Domain"} />
            </div>
          </CardItem>
          <CardItem item="footer">
            <button className="btn btn-info col-sm-3 offset-sm-9">Trace Route</button>
          </CardItem>
        </form>
      </Card>
    );
  }
}

export default TraceRoute;
