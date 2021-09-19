
function scrollReducer(state = {}, action) {
    if(action.type === 'PUT_FIRST_ARRAY') {
        return {...state, 
            scrollArr:action.data.data};
    } else if(action.type === 'CHANGE_ARRAY') {
        let newArr = [...action.data];
        newArr.shift();
        newArr.push(action.data[0]);

            return {scrollArr:[...newArr]};
    } else if(action.type === "PUT_COPY_ARRAY") {
        let newArr = [...action.data]
        return {...state, scrollArr: [...newArr]};
    }
      return state;
}

const actionChangeArr = (data) => {
    return({type: 'CHANGE_ARRAY', data})};

const actionFirstArr = () => {
    return({type: 'FIRST_ARRAY'})};

const actionNextStep = (data) => { 
    return({type: 'NEXT_STEP', data});
}

const actionCopyArr = (data) => {
    return({type: "COPY_ARRAY", data});
}
const actionPutCopy = (data) => {
    return({type: "PUT_COPY_ARRAY", data});
}
const actionPutFirstArr = (data) => {
    return({type: 'PUT_FIRST_ARRAY', data})
}
    


export {actionNextStep, actionPutFirstArr, actionPutCopy, actionFirstArr, scrollReducer, actionChangeArr, actionCopyArr};