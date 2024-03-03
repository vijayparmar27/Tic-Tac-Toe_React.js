import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import Lobby from "../pages/Lobby/Lobby";
import TicTacToeBoard from "../pages/TicTacToeBoard/TicTacToeBoard";
import PrivateRouters from "../Routers/PrivateRouter";
import { PrivateroutesArray, PublicroutesArray } from "./routers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {PublicroutesArray?.map(({ component: Component, path, title }, key) => (
        <Route path={path} element={<Component />} key={key} />
      ))}
      
      <Route
        path="/"
        element={
          <PrivateRouters>
            <Root />
          </PrivateRouters>
        }
      >
        {PrivateroutesArray?.map(
          ({ component: Component, path, title }, key) => (
            <Route
              path={path}
              element={
                <PrivateRouters>
                  <Component />
                </PrivateRouters>
              }
              key={key}
            />
          )
        )}
      </Route>
    </>
  )
);
export default router;
