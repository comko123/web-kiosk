import { useRecoilState } from "recoil"
import { userData } from "../../../atom"

interface IVTbuttonProps {
vt:string,
receiveType:"STORE"|"TAKEOUT"
}

const redius = {borderRadius:"8px",border:"none"}
const VTbutton = ({vt,receiveType}:IVTbuttonProps) => {
    const [data,setData] = useRecoilState(userData)
return  (<>&nbsp;&nbsp;&nbsp;<button className="textcol-span" onClick={() => setData({...data,receiveType})}
style={data.receiveType === receiveType? {backgroundColor:"tomato",color:"white",...redius}:redius}>{vt}
</button></>)}
export default VTbutton