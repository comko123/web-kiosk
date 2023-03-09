import React from "react"
import "./ProductOption.moudule.css"
 
const ProductOption = ({setOptionState}:IProductOptionProps) => {
    return(<><span className="textcol-span">option</span>&nbsp;:&nbsp; {["Ice","Hot"].map(item=><React.Fragment key={item}>
    <input type="radio" name="option" value={item} onClick={e=>setOptionState(e.currentTarget.value)}/>
    &nbsp;<span className="optionName textcol-span">{item}</span>&nbsp;&nbsp;</React.Fragment>)}</>)}
export default ProductOption