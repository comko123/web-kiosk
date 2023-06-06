import { userData } from "@/atom"
import { useRecoilState } from "recoil"
import { Fragment } from "react"
const redius = {borderRadius:"8px",border:"none"}
const BtnList = () => {
    const [data,setData] = useRecoilState(userData)
return(
<>{[{k:"방문",e:"STORE"},{k:"포장",e:"TAKEOUT"}].map(({k,e})=>{return(
    <Fragment key={e}>
    &nbsp;&nbsp;&nbsp;<button className="textcol-span" onClick={() => setData({...data,receiveType:e})}
style={data.receiveType === e? {backgroundColor:"tomato",color:"white",...redius}:redius}>{k}
</button>
    </Fragment>
)
})}

</>)}
export default BtnList