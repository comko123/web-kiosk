import VTbutton from "./VTbutton"

const BtnList = () => {
return(
<>{[{k:"방문",e:"STORE"},{k:"포장",e:"TAKEOUT"}].map(({k,e})=>{return(
<VTbutton 
vt={k} 
key={k} 
receiveType={e as "STORE"|"TAKEOUT"}
/>)})}</>)}
export default BtnList