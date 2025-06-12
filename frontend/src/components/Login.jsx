import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { handleGoogleSuccess } = useAuth();

  const handleGoogleError = () => {
    console.error("Google login failed");
    alert("Google login failed. Please try again.");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome</h1>
        <p>Sign in to continue to your account</p>

        <div className="google-login-wrapper">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
            theme="outline"
            size="large"
            text="signin_with"
            shape="rectangular"
          />
        </div>

        <div className="login-footer">
          <p>By signing in, you agree to our Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
