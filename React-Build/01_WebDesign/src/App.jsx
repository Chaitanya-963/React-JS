import { theme } from "./constant/theme";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-full h-full" style={{ backgroundColor: theme.primaryColor }}>
      <Home/>
    </div>
  );
};

export default App;
