import React from 'react';
import Header from './header';
import Content from './content';
import { List,Row, Col } from 'antd';



class Footer extends React.Component {
	
  render() {

	
     return (
		
        <div className="Home"> 
				<Row  style={{backgroundColor:'#000',padding:'20px',marginTop:'20px'}}>
				<Col span={5} offset = {1}>
				<h6 style={{color:'#fff'}}>CUSTOMER SERVICE</h6>
				<List>
      <List.Item>
       <span style = {{color:'#fff'}}> Title 1</span>
      </List.Item>	
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 2</span>
      </List.Item>
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 3</span>
      </List.Item>
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 4</span>
      </List.Item>
	  </List>
				</Col>
				<Col span={5} offset = {1}>
				<h6 style={{color:'#fff'}}>COMPANY</h6>	
				<List>

			
   
      <List.Item>
       <span style = {{color:'#fff'}}> Title 1</span>
      </List.Item>	
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 2</span>
      </List.Item>
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 3</span>
      </List.Item>
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 4</span>
      </List.Item>
	  </List>
				</Col>
				<Col span={5} offset = {1}>
				<h6 style={{color:'#fff'}}>CONNECT WITH US</h6>	
				<List>
      <List.Item>
       <span style = {{color:'#fff'}}> Title 1</span>
      </List.Item>	
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 2</span>
      </List.Item>
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 3</span>
      </List.Item>
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 4</span>
      </List.Item>
	  </List>
				</Col>
				<Col span={5} offset = {1}>
				<h6 style={{color:'#fff'}}>KEEP UP TO DATE</h6>	
				<List>

			
   
      <List.Item>
       <span style = {{color:'#fff'}}> Title 1</span>
      </List.Item>	
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 2</span>
      </List.Item>
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 3</span>
      </List.Item>
	  <List.Item>
	  <span style = {{color:'#fff'}}> Title 4</span>
      </List.Item>
	  </List>
				</Col>
				</Row>
        </div>
     );
  }
} 


export default Footer; 
