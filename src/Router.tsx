import App from "./App"
import MainIndex from "./MainIndex"
import AllDrink from "./ProductList/AllDrink"
import CategoryDrink from "./ProductList/CategoryDrink"
import {createBrowserRouter} from "react-router-dom"
const Router = createBrowserRouter([{
    path:"/",element:<App/>,children:[
    {path:"",element:<MainIndex/>,children:[{
    path:"productName",element:<AllDrink/>},
    {path:":drink",element:<CategoryDrink/>,children:[{
    path:"productName",element:<CategoryDrink/>}]}]}]}])
export default Router