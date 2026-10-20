import { createRoot } from "react-dom/client";

//Component
import AppRouter from "@routes/AppRouter";

//style
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";

createRoot(document.getElementById("root")!).render(<AppRouter />);
