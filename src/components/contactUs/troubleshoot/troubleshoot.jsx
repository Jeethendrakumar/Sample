import React from "react";
import PingForm from "./pingForm";
import Column from "../../../common/column";
import TraceRoute from "./traceRouteFrom";
import ResultBox from "../../../common/resultBox";

class TroubleShoot extends React.Component {
  render() {
    const pattern =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return (
      <>
        <div className="row">
          <Column span={6}>
            <PingForm pattern={pattern} />
          </Column>
          <Column span={6}>
            <ResultBox label={"Ping Result"} children={""} />
          </Column>
          <Column span={6}>
            <TraceRoute pattern={pattern} />
          </Column>
          <Column span={6}>
            <ResultBox label={"TraceRoute Result"} children={""} />
          </Column>
        </div>
      </>
    );
  }
}

export default TroubleShoot;
