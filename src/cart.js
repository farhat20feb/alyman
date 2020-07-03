import React, { Component } from 'react';
import Recipe from './Recipe';
import './cart.css';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

let items = '';
let total_amount = 0;

class Cart extends Component{



    componentWillMount(){

         items = JSON.parse(localStorage.getItem('itemlist'));

        console.log('data'+items.length);
    }

   
    render(){
              
        let addedItems = items.length ?
            (  
                items.map(item=>{

                  //  total_amount = item.price

                    total_amount = total_amount + item.price

                    localStorage.setItem('price_total',total_amount)

                  //   total_amount = item.price

                    console.log(total_amount);
                    
                    return(
                      
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: </b> 
                                        </p>
                                        <div className="add-remove">
                                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />         
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
      basketProps : state.basketState
        //addedItems: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)