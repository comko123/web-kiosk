import React from "react"
import "./CountProduct.moudule.css"

const CountProduct = ({ setCountState, countState }: ICountProductProps) => {
    return (<div className="pCount textcol-span">수량&nbsp;:&nbsp;
        {["-", "+"].map((item, index) => <React.Fragment key={item}><button
            onClick={() => index ? setCountState(countState + 1) : setCountState(countState - 1)}
            disabled={index ? false : countState >= 2 ? false : true}
            className="badge bg-dark text-" id="countBtn">{item}</button>
            {!index ? <>&nbsp;{countState}&nbsp;</> : null}
        </React.Fragment>)} </div>)
}
export default CountProduct 