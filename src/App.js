import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatAdmin from "./components/ChatAdmin/ChatAdmin";
import ChatModal from "./components/ChatModal/ChatModal";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Login from "./components/Dashboard/Login/Login";
import RecentChats from "./components/Dashboard/RecentChats/RecentChats";
import Registration from "./components/Dashboard/Registration/Registration";
import SideProfile from "./components/Dashboard/SideProfile/SideProfile";
import AuthProvider from "./context/AuthProvider/AuthProvider";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ChatModal />} />
            <Route path="/chatadmin" element={<ChatAdmin />} />

            {user && (
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard/" element={<RecentChats />} />
                <Route
                  path="/dashboard/sideprofile"
                  element={<SideProfile />}
                />
                <Route
                  path="/dashboard/recentchats"
                  element={<RecentChats />}
                />
              </Route>
            )}

            <Route
              path="/dashboard"
              element={<Navigate replace to="/dashboard/login" />}
            />
            <Route path="/dashboard/login" element={<Login />} />
            <Route path="/dashboard/registration" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
