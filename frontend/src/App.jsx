import './App.css'
import Navigator from "./components/Navigation/Navigator";
import Router from "./components/Navigation/Router";

const App = () => {
  return (
    <div className="app-container">
      <Navigator />
      <div className="content">
        <Router />
      </div>
    </div>
  );
};

export default App;

