import React from 'react';
import { connect } from 'react-redux';
import { buyProduct } from '../Redux/actions/index';
import { BUY_LAPTOP, BUY_MOBILE } from '../Redux/actions/actionsTypes';
import { on } from 'commander';

class Shop extends React.Component{
    render(){
        const { laptops, mobiles, onBuyProduct } = this.props;
        return(
        <div>
            <h1 className="title">Welcome to shot</h1>
            <div className="item">
                <p>Dell laptop</p>
                <p>Avaible{laptops}</p>
                <button onClick={()=>onBuyProduct(BUY_LAPTOP)}>Buy</button>
            </div>
            <div className="item">
                <p>MI MOBILE</p>
                <p>Avaible: {mobiles}</p>
                <button onClick={()=>onBuyProduct(BUY_MOBILE)}>Buy</button>
            </div>
        </div>
        );
    }
}
const mapStateToProps=state=>{
    return{
        laptops: state.laptops,
        mobiles: state.mobiles
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onBuyProduct:type=>dispatch(buyProduct(type))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop);

