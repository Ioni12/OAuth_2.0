import { GoogleOAuthProvider } from "@react-oauth/google";
import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Loading from "./components/Loading";
import "./App.css";

function AppContent() {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">{isAuthenticated ? <Dashboard /> : <Login />}</div>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <AppContent />
    </GoogleOAuthProvider>
  );
}

export default App;
