import "./index.css";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Changed from BrowserRouter
import App from "./App";
import { FavouritesProvider } from "./context/FavouritesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </HashRouter>
);