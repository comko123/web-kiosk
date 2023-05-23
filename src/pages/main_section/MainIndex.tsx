import './Main.moudule.css'
import 'bootstrap/dist/css/bootstrap.css'
import ProductList from "@ProductList"
import Summary from "@Summary"
import { useQuery } from 'react-query'
import { inputProductList } from '@api'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { productsState } from '@atom'

const Main = () => {
    const { isLoading, data, error } = useQuery<ISelectMenu[]>("Product List", 
    inputProductList, { refetchInterval: 5 * 60 * 1000, 
        refetchOnWindowFocus: false, suspense: true })
    const setProducts = useSetRecoilState(productsState)
    useEffect(() => {
        setProducts(data as ISelectMenu[])
    }, [data])
    return (<><div className="container-fluid">
        <div className="row justify-content-center m-4">
            <div style={{ textAlign: "center" }}><Link to="/" className='mainText'>
                <img src="https://image.istarbucks.co.kr/common/img/common/favicon.ico?v=200828" alt='' />
            </Link></div></div><div className="card"><div className="row">
                {isLoading ? <h3>상품 목록을 가져오는중 입니다...</h3> : error ?
                    <h3>상품 목록을 가져오는데 실패 했습니다.</h3> :
                    <div className="col-md-8 d-flex flex-column align-items-start padding-option pt-0">
                        <ProductList /></div>}
                <div className="col-md-4 summary p-4"><Summary />
                </div></div></div></div></>)
}
export default Main