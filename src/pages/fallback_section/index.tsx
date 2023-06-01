import FadeLoader from "react-spinners/FadeLoader";
import "./fallbackPage.moudule.css"
const FallbackPage = () => {
return(<>
<div className="fbk_contanier">
  <div className="spinner_contanier">
  <FadeLoader
    color="rgba(0, 106, 42, 0.9)"
    height={15}
    width={8}
    radius={5}
    margin={3}
  /> 
<div className="text_contanier">로딩중입니다...</div>
  </div>
</div>
</>)
}
export default FallbackPage