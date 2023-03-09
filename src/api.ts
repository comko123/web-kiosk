import axios from "axios"

class userOrderList{
orderItems;phoneNumber;receiveType;   
constructor(orderItems: ISelectMenu[],phoneNumber:number|null,receiveType:string){
    this.phoneNumber = phoneNumber
    this.receiveType = receiveType
    this.orderItems = orderItems.map(({productId,category,option,price,count})=>
    ({productId,category,option,price,count}))}}
//필드명 quantity => count
export const inputProductList = async() => {
    return await(await axios('http://localhost:8080/api/v1/products')).data
}
export const outputProductList = async(orderItems: ISelectMenu[],phoneNumber:number|null,receiveType:string) => {
    const orderList = new userOrderList(orderItems,phoneNumber,receiveType)
    orderList.orderItems.length?console.log(orderList):alert("아이템을 선택 해주세요...")
    // await(await axios.post('http://localhost:8080/api/v1/orders',orderList)).data
}