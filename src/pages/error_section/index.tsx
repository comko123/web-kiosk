import { useNavigate } from "react-router-dom"
import "./ErrorElement.moudule.css"
const ErrorElement = () => {
    const navigate = useNavigate()
    return(<main className="error_content">
        <div className="error_text">요청하신 작업을 수행할수 없습니다.</div>
        <input type="button" className="error_button" 
        value="Home" onClick = {()=>navigate('/')}/>
    </main>)
}
export default ErrorElement