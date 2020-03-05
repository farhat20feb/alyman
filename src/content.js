import React from 'react';
import Men1 from './assets/men-1.jpg'
import Men2 from './assets/men-2.jpg'
import { Card,Carousel,Divider,Row, Col } from 'antd';


const { Meta } = Card;

let styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	}
}

class Content extends React.Component {
    render() {
       return (
          <div>
            <Row>
				<Col span={24}>
					<Carousel autoplay>
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
				</Carousel>
				</Col>
			</Row>	

			<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold',marginTop:'50px' }}>
     			<h1> Design of the day - Men </h1>
   			</Divider>
			
			   <Row>
				<Col span={12}>
					<img src={Men1} alt=""/>
				</Col>
				<Col span={12}>
				<img src={Men2} alt=""/>
				</Col>
				</Row>
				<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold',marginTop:'50px' }}>
     			<h1> About Us </h1>
   			</Divider>
				<Row style={styles.root}>
				<Col span={7} offset = {1}>
				<Card style={{ width: 300 }}>
    				<p>Card content</p>
    				<p>Card content</p>
    				<p>Card content</p>
  				</Card>	
				</Col>
				<Col span={7} offset = {1}>
				<Card style={{ width: 300 }}>
    				<p>Card content</p>
    				<p>Card content</p>
    				<p>Card content</p>
  				</Card>				
				</Col>
				<Col span={7} offset = {1}>
				<Card style={{ width: 300 }}>
    				<p>Card content</p>
    				<p>Card content</p>
    				<p>Card content</p>
  				</Card>				
				</Col>
				</Row>		
				<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold',marginTop:'50px' }}>
     			<h1> Best Seller </h1>
   			</Divider>	
			   <Row>
				   <Col span={5} offset = {1}>
				   <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
					</Col> 
					<Col span={5} offset = {1}>
				   <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
					</Col>
					<Col span={5} offset = {1}>
				   <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
					</Col>
					<Col span={5} offset = {1}>
				   <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
					</Col>
					
				</Row>	
				<Row style={{marginTop:'30px'}}>
				   <Col span={5} offset = {1}>
				   <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
					</Col> 
					<Col span={5} offset = {1}>
				   <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
					</Col>
					<Col span={5} offset = {1}>
				   <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
					</Col>
					<Col span={5} offset = {1}>
				   <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
					</Col>
					
				</Row> 	
          </div>
       );
    }
 }
 export default Content; 