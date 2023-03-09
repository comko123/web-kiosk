import { useNavigate, useParams } from "react-router"
import {motion} from "framer-motion"
import "./Product.moudule.css"

const  Product = ({imgUrl,productId,productName,category,price}:IProductProps) => {
    const navigate = useNavigate()
    const {drink} = useParams()
    return (<><div className="col-2"><img src={imgUrl} alt="" style={{borderRadius:"8px"}}/></div>
    <div className="col"><div className="row colspan media-margin eclips">{productName}</div>
    <div className="row text-muted colspan">{category}</div></div>
    <div className="col price text-site colspan">{price}원</div>
    <div className="col text-end action">
    <motion.button className="btn btn-small btn-outline-dark" 
    layoutId={productId+""} style={{borderRadius:"8px"}}
    onClick={()=>!drink?navigate(`/productName?name=${productId}`):
    navigate(`/${category}/productName?name=${productId}`)}>보기</motion.button></div></>)}
    export default Product