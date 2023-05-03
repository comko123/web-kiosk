import './MainIndex.moudule.css'
import 'bootstrap/dist/css/bootstrap.css'
import ProductList from "./ProductList/ProductList"
import Summary from "./Order/Summary"
import { Link } from 'react-router-dom'

const Main = () => {

    return (<><div className="container-fluid">
        <div className="row justify-content-center m-4">
            <div style={{ textAlign: "center" }}><Link to="/" className='mainText'>
                <img src="https://image.istarbucks.co.kr/common/img/common/favicon.ico?v=200828" alt='' />
            </Link></div></div><div className="card"><div className="row">
                <div className="col-md-8 d-flex flex-column align-items-start padding-option pt-0">
                    <ProductList /></div><div className="col-md-4 summary p-4">
                    <Summary /></div></div></div></div></>)
}
export default Main