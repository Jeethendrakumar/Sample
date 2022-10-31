import React from "react";
import Input from "../../../common/input";
import Card, { CardItem } from "../../../common/card";
import Column from "../../../common/column";

class Ping extends React.Component {
  render() {
    return (
      <Card>
        <form className="form-horizontal">
          <CardItem item="header">
            <CardItem item={"text"}>Ping Form</CardItem>
          </CardItem>
          <CardItem item="body">
            <div className="form-group">
              <Input name={"domain"} type={"text"} children={"Domain"} />
            </div>
          </CardItem>
          <CardItem item="footer">
            <button className="btn btn-info col-sm-3 offset-sm-9">Ping</button>
          </CardItem>
        </form>
      </Card>
    );
  }
}

export default Ping;
