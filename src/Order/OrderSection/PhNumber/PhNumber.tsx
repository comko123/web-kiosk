import { useRecoilState } from "recoil"
import { userData } from "@atom"
import "./PhNumber.moudule.css"

const PhNumber = () => {
const [data,setData]=useRecoilState(userData)
return(<><input className="phoneIpt" type="text" placeholder="(-빼고 입력 해주세요.)" 
value={data.phoneNumber||""} onChange={e=>{
(/^[0-9]+$/.test(e.target.value))?setData({...data,phoneNumber:+e.target.value}):
setData({...data, phoneNumber:+e.target.value.replace(/[^0-9]/g,'')})}}/></>)}
export default PhNumber