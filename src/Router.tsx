import App from "./App"
import {createBrowserRouter} from "react-router-dom"
import { lazy , Suspense } from "react"
const MainIndex = lazy(()=>import("./MainIndex"))
const AllDrink = lazy(()=>import("./ProductList/AllDrink"))
const CategoryDrink = lazy(()=>import("./ProductList/CategoryDrink"))
const Router = createBrowserRouter([{
    path:"/",element:<App/>,children:[
    {path:"",element:<Suspense fallback="loading..."><MainIndex/></Suspense>,children:[{
    path:"productName",element:<Suspense fallback="loading..."><AllDrink/></Suspense>},
    {path:":drink",element:<Suspense fallback="loading..."><CategoryDrink/></Suspense>,children:[{
    path:"productName",element:<Suspense fallback="loading..."><CategoryDrink/></Suspense>}]}]}]}])
export default Router