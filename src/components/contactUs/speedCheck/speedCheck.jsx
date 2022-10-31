import ReactSpeedometer from "react-d3-speedometer";
import React from "react";

class SpeedCheck extends React.Component {
  render() {
    return (
      <>
        <center>
          <ReactSpeedometer
            width={500}
            needleHeightRatio={0.7}
            value={1000}
            minValue={0}
            maxValue={1000}
            customSegmentStops={[0, 200, 400, 600, 800, 1000]}
            segmentColors={[
              "#D22B2B",
              "#FF3131",
              "#FFC300",
              "#4CBB17",
              "#2E8B57",
            ]}
            currentValueText="Network Speed"
            customSegmentLabels={[
              {
                text: "Poor",
                position: "OUTSIDE",
                color: "#d8dee9",
              },
              {
                text: "Bad",
                position: "OUTSIDE",
                color: "#d8dee9",
              },
              {
                text: "Good",
                position: "OUTSIDE",
                color: "#d8dee9",
              },
              {
                text: "Better",
                position: "OUTSIDE",
                color: "#d8dee9",
              },
              {
                text: "Best",
                position: "OUTSIDE",
                color: "#d8dee9",
              },
            ]}
            ringWidth={48}
            needleTransitionDuration={3333}
            needleTransition="easeElastic"
            needleColor={"black"}
            textColor={"#d8dee9"}
          />
        </center>
      </>
    );
  }
}

export default SpeedCheck;
