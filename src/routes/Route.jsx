import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Carousel from "../components/Carousel/Carousel";
import SignInPage from "../Pages/SignInPage/SignInPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Carousel
            },
            {
                path: "/signIn",
                Component: SignInPage
            }
        ]
    }
]);

export default router;