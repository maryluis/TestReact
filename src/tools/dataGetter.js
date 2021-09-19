function dataGetter(data=[], getter) {
    data.length < 1 && getter()
}

export default dataGetter;