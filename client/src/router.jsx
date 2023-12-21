import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WaitingRoom from "./pages/WaitingRoom";
import QuizPage from "./pages/QuizPage";
import Root from "./pages/Root";
import Quiz from "./pages/quiz";
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/room/:roomId",
        element: <Quiz />,
      },
      {
        path: "/room/:roomId/waiting",
        element: <WaitingRoom />,
      },
    ],
  }
]);

export default router;
