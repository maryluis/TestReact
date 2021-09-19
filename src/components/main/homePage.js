import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionFirstArr, actionNextStep, actionCopyArr } from "../../redux";
import { useEffect, useState } from "react";
import { OneItem } from "./index";
import { delay } from "../../tools";

const HomePage = ({state, products=[], getData, putData, scrollArr=[], newData}) => {

    useEffect(() =>  {
        if(products.length === 0) {
            getData();
        } else {
            putData(products);
        }
    },[]);


    const [scrollValue, changeValue] = useState({scrollMargin: 0, transitionValue: 'margin-left 0.5s'});

    const [isLock, changeLock] = useState(false);

    async function nextStep(value) {
        if(!isLock) {
            changeLock(true)
            changeValue({scrollMargin: value - 214, transitionValue: 'margin-left 0.5s'});
            await delay(600);
            newData(scrollArr);
            changeValue({scrollMargin: 0, transitionValue: 'all 0s'});
            changeLock(false)
        } else {
            return
        }
    }


    return(
        <div className="flex center column scrollWrapper">
            <div className="flex column scrollConteiner"> 
                <div className="flex scrollBar" style={{transition: scrollValue.transitionValue, marginLeft: scrollValue.scrollMargin+`px`, width: 2200+"px"}}>
                    {scrollArr.map((item) => 
                        <OneItem title={item.name} img={item.image} key={item.id}/>
                    )}              
                </div>
            </div>
            <button className="scrollButton" onClick={() => nextStep(scrollValue.scrollMargin)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
                </button>
        </div>
    )
}



const mapStateToProps = state => ({
    state: state,  
    products: state.products.products,
    scrollArr: state.scrollArr.scrollArr
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getData: actionFirstArr,
    putData: actionCopyArr,
    newData: actionNextStep
}, dispatch);



const CHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default CHomePage;