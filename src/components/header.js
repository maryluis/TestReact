import { Link } from "react-router-dom"

const Header = () => {


const navigation = [

        { title: "home",
        link: "/"},

        { title: "products",
        link: "/products"
        }
    ];

    return(
        <header className="dark flex">
            <span className = "logo lightLetter flex center">UKAD</span>
            <ul className = "nav flex">
                {navigation.map((item) => 
                <li className="noListStyle smallPadding smallMarginHor" key={item.title}>
                    <Link className="lightLetter noTextDecor weight" to={item.link}>
                    {item.title.toUpperCase()}
                    </Link>
                </li>)}
            </ul>
        </header>
    )
}

export default Header;