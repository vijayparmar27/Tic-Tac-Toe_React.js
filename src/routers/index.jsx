import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import Lobby from "../pages/Lobby/Lobby";
import TicTacToeBoard from "../pages/TicTacToeBoard/TicTacToeBoard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/gameplay" element={<TicTacToeBoard />} />
    </Route>
  )
);
export default router;
