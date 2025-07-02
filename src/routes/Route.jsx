import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Carousel from "../components/Carousel/Carousel";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Carousel
            }
        ]
    }
]);

export default router;