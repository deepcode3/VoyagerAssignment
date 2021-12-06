import React, { useState } from "react";
import "./styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const Progressbar=()=> {
  const [progress, setProgress] = useState(75);
  return (
    <div className="Ap">
      <ProgressBar percent={progress}>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
              <div className={"test"}>Cart</div>
            </>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
              <div className={"test"}>Address Details</div>
            </>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <>
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
              <div className={"test"}>Payment</div>
            </>
          )}
        </Step>
      </ProgressBar>
      <div style={{ marginTop: "40px" }}>
        <button onClick={() => setProgress(progress + 50)}>next</button>
      </div>
      <div
        onClick={() => setProgress(progress - 50)}
        style={{ marginTop: "20px" }}
      >
        <button>prev</button>
      </div>
    </div>
  );
}
export default Progressbar;