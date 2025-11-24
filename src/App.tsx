import React from "react";
import "./theme/core.css";
import "./theme/variables.css";

const App: React.FC = () => {
  return (
    <iframe
      src="https://ineednumbers.com"
      title="INeedNumbers WebApp"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    />
  );
};

export default App;
