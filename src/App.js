import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <ProgressBarController />
    </div>
  );
}

const ProgressBarController = () => {
  const [status, setStatus] = React.useState(0);

  return <ProgressBar status={0} />;
};

const ProgressBar = ({ status = 0 }) => {
  return (
    <div className="progress-container" style={{ width: `${status}%` }}>
      {`${status}%`}
    </div>
  );
};
