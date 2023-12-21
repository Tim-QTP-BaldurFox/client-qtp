import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import WaitingRoom from "./pages/WaitingRoom";
import QuizPage from "./pages/QuizPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
