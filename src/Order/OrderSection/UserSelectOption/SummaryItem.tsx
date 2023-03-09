import "./SummaryItem.moudule.css"

const SummaryItem = ({productName,option,count}:ISummaryItemProps)=> {
    return (<div className="row textcol-span"id="pow">
    <h6 className="p-0 textcol-span"id="paw" >{productName}&nbsp;<br/>  
    <div style={{marginTop:"8px"}}>
    <div className="badge bg-dark text- textcol-span"> {option}</div>&nbsp;
    <div className="badge bg-dark text- textcol-span"> {count}개</div>&nbsp;</div> </h6></div>)}
    export default SummaryItem
    