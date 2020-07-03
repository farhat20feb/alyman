import React from 'react';
import { Card,Row, Col } from 'antd';
import { connect } from 'react-redux';
import { addBasket } from './actions/addAction';

const numbers = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
		{id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
		{id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
    ],
    total: 0

};

const { Meta } = Card;




class ProductList extends React.Component {

    addBasket = (person) => {
        this.props.addBasket(person)
    }

    
    render() {
      
       return (
          <div>	
			   <Row>
               {numbers.items.map((person, index) => (
       <Col span={5} offset = {1} key={index}>
	   <Card
hoverable
style={{ width: 240 }}
cover={<img alt="example" src={person.img  }/>}
>
<Meta title={person.title} />
<div className="productCardDetail"> 
<div className="productPriceBox">
			   <span className="discountedPriceText">₹ <b>{person.price}</b></span>
	<a href="#" onClick={() => this.addBasket(person)}><div className="loyaltyPriceBox">Add To Cart</div></a></div></div>

</Card>
		</Col> 
    ))}
					
				</Row> 	
          </div>
       );
    }
 }
 export default connect(null, { addBasket})(ProductList); 