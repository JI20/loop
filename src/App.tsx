import "./App.css";
import "leaflet/dist/leaflet.css";
import Routes from "./components/router/Routes";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
