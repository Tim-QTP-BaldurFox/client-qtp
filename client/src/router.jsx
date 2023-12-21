import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import WaitingRoom from "./pages/WaitingRoom";
import QuizPage from "./pages/QuizPage";
import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/room/:roomId/waiting",
        element: <WaitingRoom />,
      },
      {
        path: "/room/:roomId",
        element: <QuizPage />,
      },
    ],
  },
]);

export default router;
