import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Carousel from "../components/Carousel/Carousel";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";

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
                path: "/signUp",
                Component: SignUpPage
            },
            {
                path: "/signIn",
                Component: SignInPage
            }
        ]
    }
]);

export default router;