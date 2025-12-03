import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login', { replace: true });
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#F5FEF9'
      }}
    >
      <img
        src="/resources/splash.png"
        alt="I Need Numbers Fairy"
        style={{ width: '220px', height: 'auto' }}
      />
    </div>
  );
};

export default SplashScreen;
