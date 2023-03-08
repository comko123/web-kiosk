import DrinkList from "./DrinkList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ISelectMenu } from "../MainIndex"
import { useRecoilValue } from "recoil"
import { productsState } from "../atom"
export interface ICategoryDrinkOutlet {
    products:ISelectMenu[]
}
const CategoryDrink = () => {
const {drink} = useParams()
const [categoryResult,setCategoryResult] = useState<ISelectMenu[]>([])
const products = useRecoilValue(productsState)
useEffect(()=>{
    setCategoryResult([])
    products.filter(item=>(item.category === drink) && setCategoryResult(state=>[...state,item]))
    },[drink,products])
    return(<DrinkList locationProducts={categoryResult} link="/:drink/productName"/>)}
export default CategoryDrink