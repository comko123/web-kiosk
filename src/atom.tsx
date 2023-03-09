import { atom } from "recoil"
import { v1 } from "uuid"

export const itemsState = atom<ISelectMenu[]>({
    key:`items${v1()}`,
    default:[]
})

export const productsState =atom<ISelectMenu[]>({
    key:`product${v1()}`,
    default: []
}) 

export const userData = atom<IUserData>({
    key:`userData${v1()}`,
    default:{receiveType: "STORE", phoneNumber:null}
})