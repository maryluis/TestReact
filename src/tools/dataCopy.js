
function scrollObj(fn, obj = {}) {
    fn();
    return  {...obj}
}

export default scrollObj;