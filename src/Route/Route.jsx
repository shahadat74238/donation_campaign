import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CategoryDetails from "../Pages/CatagoryDetails/CategoryDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/donation",
                element: <Donation />
            },
            {
                path: "/statistic",
                element: <Statistics />
            },
            {
                path: "/details/:id",
                element: <CategoryDetails />,
                loader: ()=>fetch('../data.json')
            }
        ]
    }
]);

export default route;