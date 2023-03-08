import "./DefaultOption.moudule.css"
interface IDefaultOptionProps {
    [key:string]:number
} 
const DefaultOption = ({defaultOptionC,defaultOptionH}:IDefaultOptionProps) => {
    return(<>{defaultOptionC!==-1||defaultOptionH!==-1?
    <div className="detailBoxSummaryOptionText">{defaultOptionC===-1?"Hot":"Ice"}</div>:null}</>)}
export default DefaultOption