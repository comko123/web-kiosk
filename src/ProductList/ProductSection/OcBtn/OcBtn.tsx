import { useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"
import { itemsState, productsState } from "../../../atom"
import { ISelectMenu } from "../../../Main"
import "./OcBtn.moudule.css"
interface IOcBtnProps{
    productId:string
    optionState:string
    countState:number
}

const OcBtn = ({productId,optionState,countState}:IOcBtnProps) => {
    const [items,setItems] = useRecoilState(itemsState)
    const products = useRecoilValue(productsState)
    const navigate = useNavigate()

    const handleAddClicked=(productId:string,option:string,count:number)=>{
        const product=products?.find(v=>v.productId===productId)
        const found=items?.find(v=>v.productId===productId)
        const foundOption=items?.find(v=>(v.productId===productId&&v.option===option))?.option === option
        const newState=[...items,{...product,count,option}] 
        const updatedItems=found?foundOption?
        items.map(v=>(v.productId===productId&&v.option===option)? 
        {...v,count:v.count as number+count,option}:v):newState:newState
        setItems(updatedItems as ISelectMenu[])}
        
    return(<div className="btnBox">{["주문하기","취소하기"].map((item,index)=><input key={item}
    type ="button" value={item} className="order_cancle_button textcol-span"
    style={{backgroundColor:index?"tomato":"rgba(0, 106, 42, 0.9)"}} 
    onClick={()=>{if(index){navigate(-1)}else{if(!optionState){alert("옵션을 선택해 주세요.")}
    else{handleAddClicked(productId,optionState,countState);navigate(-1)}}}}/>)}</div>)}
export default OcBtn