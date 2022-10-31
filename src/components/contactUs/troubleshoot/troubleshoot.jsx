import React from "react";
import PingForm from "./pingForm";
import Column from "../../../common/column";
import TraceRoute from "./traceRouteFrom";
import ResultBox from "../../../common/resultBox";

class TroubleShoot extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <Column span={6}>
            <PingForm />
          </Column>
          <Column span={6}>
            <ResultBox label={"Ping Result"} children={""} />
          </Column>
          <Column span={6}>
            <TraceRoute />
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
