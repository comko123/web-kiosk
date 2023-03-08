import axios from "axios"
import { ISelectMenu } from "./MainIndex"

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
    await(await axios.post('http://localhost:8080/api/v1/orders',orderList)).data
}