import NavBar from "./components/NavBar";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Favorite from "./components/Favorite";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

function Body(){
  return(
    <>
    <Banner />
    <Movies />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
    ],
  },
]);

export default appRouter;
