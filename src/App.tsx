import React, { useEffect, useState } from "react";
import "./theme/core.css";
import "./theme/variables.css";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500); // Splash duration

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FEF9",
        }}
      >
        {/* Fairy / Logo */}
        <img
          src="/resources/splash.png"  // update if name/path differs
          alt="I Need Numbers Fairy"
          style={{ width: "200px", height: "auto", marginBottom: "20px" }}
        />

        {/* Loading Spinner */}
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "4px solid rgba(0, 0, 0, 0.1)",
            borderTop: "4px solid #34C759", // brand color for spinner top
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />

        {/* Spinner animation */}
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <iframe
      src="https://ineednumbers.com/auth/login"
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

