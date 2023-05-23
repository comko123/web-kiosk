// import CancleBtn from "@CancleBtn"
import "./Summary.moudule.css"
import { useMutation } from "react-query"
import { useRecoilValue } from "recoil"
import { itemsState, userData } from "@atom"
import { outputProductList } from "@api"
import CancleBtn from "@CancleBtn"
// import BtnList from "../another_btn/BtnList"
// import PhNumber from "../ph_number/PhNumber"
import BtnList from "@BtnList"
import PhNumber from "@PhNumber"
const totalPrice =(items:ISelectMenu[]):number=> {
    return items.reduce((prev, curr) => 
    prev + (curr.count ? curr.price * curr.count:curr.price *1), 0)}

const Summary = () => {
    const items = useRecoilValue(itemsState)
    const {phoneNumber,receiveType} = useRecoilValue(userData)
    const {mutate} = useMutation("UserSelectOrderList",
    ()=>outputProductList(items,phoneNumber,receiveType),
/* {onError: () => { alert('서버 장애') },
    onSuccess: () => { alert('주문이 정상적으로 접수되었습니다.');window.location.replace('/')}}*/)
    return (<><div className="summartBox">
    <h5 className="m-0 p-0"><b className="witeText textdefault-span">결제 내역</b></h5></div> 
    <CancleBtn/>
    <div className="mb-3"><label className="form-label witeText textdefault-span">방문/포장</label>
    <BtnList/></div>
    <div className="mb-3"><label className="form-label witeText textdefault-span">적립할 핸드폰 번호</label>
    <PhNumber/></div>
    <div className="row pt-2 pb-2 border-top">
    <h5 className="col witeText textdefault-span">총금액</h5>
    <h5 className="col text-end witeText textdefault-span">{totalPrice(items)}원</h5></div>
    <button className="btn btn-dark col-12 textdefault-span" onClick={mutate as ()=>void}>결제하기</button></>)}
export default Summary