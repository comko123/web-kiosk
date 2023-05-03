import { useRecoilValue } from "recoil"
import { productsState } from "@atom"
import DrinkList from "./DrinkList"
const AllDrink = () => {
    const products = useRecoilValue(productsState)
    return (<DrinkList locationProducts={products} link="/productName" />)
}
export default AllDrink