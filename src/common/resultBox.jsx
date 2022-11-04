import React from "react";
import Card, { CardItem } from "./card";

const ResultBox = ({ label, children }) => {
  return (
    <>
      <Card>
        <form className="form-horizontal">
          <CardItem item="header">
            <CardItem item={"text"}>{label}</CardItem>
          </CardItem>
          <CardItem item="body">
            <div className="form-group">
              <textarea className="form-control col-sm-12" cols={100} rows={4} defaultValue={children}>
              </textarea>
            </div>
          </CardItem>
        </form>
      </Card>
    </>
  );
};

export default ResultBox;
