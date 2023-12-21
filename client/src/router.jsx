import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import WaitingRoom from "./pages/WaitingRoom";
import QuizPage from "./pages/QuizPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/room/:roomId/waiting",
        element: <WaitingRoom />,
      },
    ],
  },
  {
    path: "/room/:roomId",
    element: <QuizPage />,
  },
]);

export default router;
