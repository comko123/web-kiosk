/*eslint-disable*/
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useMatch, useNavigate, useSearchParams } from "react-router-dom"
import Product from "./Product"
import "./DrinkList.moudule.css"
import OcBtn from "./ProductSection/OcBtn/OcBtn"
import CountProduct from "./ProductSection/CountProduct/CountProduct"
import ProductOption from "./ProductSection/ProductOption/ProductOption"
import DefaultOption from "./ProductSection/ProductOption/DefaultOption"

const DrinkList = ({ locationProducts, link }: IDrinkListProps) => {
    const match = useMatch(link)
    const [searchparms, _] = useSearchParams()
    const navigate = useNavigate()
    const [optionState, setOptionState] = useState("")
    const [countState, setCountState] = useState(1)
    const drinkInfo = locationProducts.find(item => item.productId === searchparms.get("name"))
    const defaultOptionC = drinkInfo?.productName.search(/아이스/)
    const defaultOptionH = drinkInfo?.productName.search(/핫/)
    useEffect(() => {
        setCountState(1)
        if (defaultOptionC !== -1) setOptionState("Ice")
        else if (defaultOptionH !== -1) setOptionState("Hot")
    }, [searchparms.get("name")])
    return (<><ul className="list-group products">
        {locationProducts.map(v => <li key={v.productId} className="list-group-item d-flex" id="listBox">
            <Product {...v} /></li>)}</ul><AnimatePresence>{match ?
                <><motion.div id="detailOutBox" onClick={() => navigate(-1)} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                    <motion.div className="detailInBox" layoutId={searchparms.get("name") + ""}>
                        <div className="detailBoxLayOut"> <div className="detailBoxImg"
                            style={{ backgroundImage: `linear-gradient(to top,lightgray,transparent), url(${drinkInfo?.imgUrl})` }} />
                            <fieldset className="detailBoxSummary">
                                <legend className="detailBoxSummaryCategory textcol-span">{drinkInfo?.category}</legend>
                                <hr /><h6 className="textcol-span scape">{drinkInfo?.productName}</h6><hr />
                                <div className="detailBoxSummaryPR">
                                    <div className="price textcol-span">price&nbsp;:&nbsp;{drinkInfo?.price && drinkInfo?.price * countState}원&nbsp;</div>
                                    <DefaultOption defaultOptionC={defaultOptionC as number} defaultOptionH={defaultOptionH as number} />
                                    <div><ProductOption setOptionState={setOptionState} />
                                        <CountProduct countState={countState} setCountState={setCountState} />
                                    </div></div><hr /><h6 className="pDescription textcol-span">{drinkInfo?.description}</h6><hr />
                                <OcBtn optionState={optionState} countState={countState} productId={drinkInfo?.productId as string} />
                            </fieldset></div></motion.div></> : null} </AnimatePresence></>)
}
export default DrinkList 