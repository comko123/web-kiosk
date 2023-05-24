import App from "./App"
import { createBrowserRouter } from "react-router-dom"
import { lazy, Suspense } from "react"
import FallbackPage from "@Fallback"
const MainIndex = lazy(() => import("@MainIndex"))
const AllDrink = lazy(() => import("@AllDrink"))
const CategoryDrink = lazy(() => import("@CategoryDrink"))
const Router = createBrowserRouter([{
    path: "/", element: <App />, children: [
        {
            path: "", element: <Suspense fallback={<FallbackPage/>}><MainIndex/></Suspense>, children: [{
                path: "productName", element: <Suspense fallback={<FallbackPage/>}><AllDrink /></Suspense>
            },
            {
                path: ":drink", element: <Suspense fallback={<FallbackPage/>}><CategoryDrink /></Suspense>, children: [{
                    path: "productName", element: <Suspense fallback={<FallbackPage/>}><CategoryDrink /></Suspense>
                }]
            }]
        }]
}])
export default Router