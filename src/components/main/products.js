import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionGetProducts } from "../../redux";
import { OneItem } from './index';
import { useEffect } from 'react';
import { dataGetter } from '../../tools';

const Products = ({getData, products, state}) => {

    useEffect(() =>  
        dataGetter(products, getData),[getData, products]
    )

    return(
        <div className="smallMargin">
            <h3>Product Page</h3>
            <div className="flex wrap center">
                {products && products.map((item) => 
                    <OneItem title={item.name} img={item.image} key={item.id}/>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    state: state,  
    products: state.products.products
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getData: actionGetProducts,
}, dispatch);



const CProducts = connect(mapStateToProps, mapDispatchToProps)(Products);

export default CProducts;