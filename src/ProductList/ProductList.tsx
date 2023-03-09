import { useEffect, useState , useRef } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import Product from "./Product"
import "./ProductList.moudule.css"
import { useRecoilValue } from "recoil"
import { productsState } from "@atom"

const carouselOperation = (number:number,value:number) => {
    return number+value
}
const carousel = (result:number,categoryBoxRef:React.RefObject<HTMLDivElement>
    ,setCategoryCarousel:(state:number)=>void) => {
    if(!categoryBoxRef.current)return
    categoryBoxRef.current.style.transform = `translate(${result}vw)`
    setCategoryCarousel(result)
} 

const scope = (categoryCarousel:number,category:string[]) => categoryCarousel>=-category.length*10&&
categoryCarousel>=-category.length*10+10&&
categoryCarousel>=-category.length*10+20

const  ProductList = ()=> {
    const [category,setCategory] = useState<string[]>([])
    const {pathname} = useLocation()
    const {drink} = useParams()
    const [categoryCarousel,setCategoryCarousel]=useState(0)
    const products = useRecoilValue(productsState)
    const categoryBoxRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
    if(!!products){products.map(item=>setCategory(state=>{
    const categoryState = [...state,item.category]
    const imporveCategoryState = new Set(categoryState)
    return[...Array.from(imporveCategoryState)]}))}},[products])
    return (<><div className="categoryBox">
    <div className="carosel-button" 
    onClick={()=>{const res = carouselOperation(categoryCarousel,30)
    if(categoryCarousel<0)carousel(res,categoryBoxRef,setCategoryCarousel)}}>&#60;</div>
    <fieldset className="categoryListBox"> 
    <div className="categoryListBoxChilld" style={{maxWidth:`${category.length*10}vw`}} ref={categoryBoxRef}>
    {category.map(item=><div className="categoryList" key={item}>
    <Link to ={`/${item}`} className="categoryLink" 
    style={drink===item?{border :"3px solid rgba(0, 106, 42, 0.9)"}:undefined}>
    {item}</Link></div>)}</div></fieldset> 
    <div className="carosel-button" 
    onClick={()=>{const res =  carouselOperation(categoryCarousel,-30)
    if(scope(categoryCarousel,category))carousel(res,categoryBoxRef,setCategoryCarousel)}}>&#62;</div></div>
    {pathname==="/"? <ul className="list-group products">
    {products.map(v =><li id="PRcategoryList"
    key={v.productId} className="list-group-item d-flex mt-3">
    <Product {...v} /></li>)}</ul> :null}
    <Outlet/></>)}
    export default ProductList