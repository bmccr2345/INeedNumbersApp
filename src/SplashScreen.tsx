import React, { useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://ineednumbers.com/auth/login';
    }, 1500); // 1.5-second delay before redirect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div className="spinner" />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffffff',
  } as React.CSSProperties,
};

export default SplashScreen;
