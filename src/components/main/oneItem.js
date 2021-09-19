
const OneItem = ({title,img}) => {

    return(
        <div className="oneItem card flex column smallBorder smallMargin center">
            <img src={`${img.url}`} alt={img.name}/>
            <h5>{title}</h5>
        </div>
    )
}

export default OneItem;