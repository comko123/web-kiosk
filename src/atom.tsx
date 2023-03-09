import { v1 } from "uuid"
import { atom } from "recoil"

export const itemsState = atom<ISelectMenu[]>({
    key:`items${v1()}`,
    default:[]
})

export const userData = atom<IUserData>({
    key:`userData${v1()}`,
    default:{receiveType: "STORE", phoneNumber:null}
})

export const productsState =atom({
    key:`product${v1()}`,
    default: [
        {productId: 'uuid-0', productName: '카페 아메리카노', category: 'ESPRESSO', price: 4500,description:"카페 아메리카노 description",imgUrl:"https://via.placeholder.com/600/14ba42"},
        {productId: 'uuid-1', productName: '자바 칩 프라푸치노', category: 'FRAPPUCCINO', price: 6300,description:"자바 칩 프라푸치노 description",imgUrl:"https://via.placeholder.com/600/3689cd"},
        {productId: 'uuid-2', productName: '아이스 카페라떼 아메리카노', category: 'ESPRESSO', price: 4500,description:"아이스 카페라떼 아메리카노 description",imgUrl:"https://via.placeholder.com/600/810b14"},
        {productId: 'uuid-3', productName: '아이스 스타벅스 돌체 라떼', category: 'ESPRESSO', price: 5900,description:"아이스 스타벅스 돌체 라떼 description",imgUrl:"https://via.placeholder.com/600/9e59da"},
        {productId: 'uuid-4', productName: '딸기 딜라이트 요거트 블렌디드', category: 'BLENDED', price: 6300,description:"딸기 딜라이트 요거트 블렌디드 description",imgUrl:"https://via.placeholder.com/600/d9acde"},
        {productId: 'uuid-5', productName: '바닐라 크림 콜드 브루', category: 'COLD_BREW', price: 5800,description:"바닐라 크림 콜드 브루 description",imgUrl:"https://via.placeholder.com/600/9de06d"},
    ]
}) 