import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="user-profile">
        <div className="profile-card">
          <img src={user.avatar} alt={user.name} className="avatar" />
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
          <span className="auth-method">
            Signed in with {user.authMethod === "google" ? "Google" : "Email"}
          </span>
        </div>

        <div className="stats-card">
          <h3>Account Information</h3>
          <div className="stat-item">
            <span>User ID:</span>
            <span>{user.id}</span>
          </div>
          <div className="stat-item">
            <span>Authentication:</span>
            <span>{user.authMethod}</span>
          </div>
          <div className="stat-item">
            <span>Status:</span>
            <span className="status-active">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
