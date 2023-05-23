import SummaryItem from "@SummaryItem"
import "./CancleBtn.moudule.css"
import { useRecoilState } from "recoil"
import { itemsState } from "@atom"

const CancleBtn = () => {
const [items,setItems] = useRecoilState(itemsState)
    return(<><div>{items.map((v,index) => 
       <div className="selectPayList" key={index}>
       <SummaryItem {...v}/>
       <div className="cancleBtn" onClick={() => {
       const sameNameItemRemove = items.filter(product=>product.productId===v.productId).filter(product=>product.option!==v.option)
       const theRestItems = items.filter(product=>product.productId!==v.productId)
       setItems([...sameNameItemRemove,...theRestItems])}}>x</div></div>)}</div></>)}
export default CancleBtn