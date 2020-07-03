import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { List,Modal, Button,Divider,Menu,Row, Col  } from 'antd';
import { FacebookOutlined,GoogleOutlined } from '@ant-design/icons';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import Badge from '@material-ui/core/Badge'
import { getNumbers } from './actions/getActions'
import { Link } from "react-router-dom";

const { SubMenu } = Menu;


let styles = {
	headerTop : {
		backgroundColor:'#fff',
		textAlign:'left'

	}, 
	loginLink:{
		marginTop:'13px'
	},
	iconleft:{
		marginTop:'10px'
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	}
}  


class Header extends React.Component {
	state = { visible: false };

	showModal = () => {
		this.setState({
		  visible: true,
		});
	  };

	  handlelogin = e => {
		console.log(e);
		this.setState({
		  visible: false,
		});
	  };
	
	  handleCancel = e => {
		console.log(e);
		this.setState({
		  visible: false,
		});
	  };

  render() {

	console.log(this.props.basketProps);
	
	const {  loading } = this.state;
     return (
		
        <div className="App">
			
			 <Row style={styles.headerTop}>
      				<Col span={4} offset = {2} style={styles.headerTop}><h5 >Logo</h5></Col>
					  <Col span ={9}>
						<Menu mode="horizontal">
						<SubMenu
							title={
								<span className="submenu-title-wrapper">
								
								MEN
								</span>
							}
							>
							<Menu.ItemGroup title="Item 1">
								<Menu.Item key="setting:1">Option 1</Menu.Item>
								<Menu.Item key="setting:2">Option 2</Menu.Item>
							</Menu.ItemGroup>
							<Menu.ItemGroup title="Item 2">
								<Menu.Item key="setting:3">Option 3</Menu.Item>
								<Menu.Item key="setting:4">Option 4</Menu.Item>
							</Menu.ItemGroup>
							</SubMenu>
							
							<SubMenu
							title={
								<span className="submenu-title-wrapper">
								
								WOMEN
								</span>
							}
							>
							<Menu.ItemGroup title="Item 1">
								<Menu.Item key="setting:1">Option 1</Menu.Item>
								<Menu.Item key="setting:2">Option 2</Menu.Item>
							</Menu.ItemGroup>
							<Menu.ItemGroup title="Item 2">
								<Menu.Item key="setting:3">Option 3</Menu.Item>
								<Menu.Item key="setting:4">Option 4</Menu.Item>
							</Menu.ItemGroup>
							</SubMenu>
							
							<SubMenu
							title={
								<span className="submenu-title-wrapper">
								
								MOBILE COVER
								</span>
							}
							>
							<Menu.ItemGroup title="Item 1">
								<Menu.Item key="setting:1">Option 1</Menu.Item>
								<Menu.Item key="setting:2">Option 2</Menu.Item>
							</Menu.ItemGroup>
							<Menu.ItemGroup title="Item 2">
								<Menu.Item key="setting:3">Option 3</Menu.Item>
								<Menu.Item key="setting:4">Option 4</Menu.Item>
							</Menu.ItemGroup>
							</SubMenu>
							<Menu.Item key="mail">
          				
          						CLEARANCE ZONE
        					</Menu.Item>
						</Menu>
					 </Col> 
					<Col span={3} offset = {3}><h6 style={styles.loginLink} onClick={this.showModal}><a href="#login">Login/Register</a></h6></Col>
						<Col style={styles.iconleft} span={1}>
							<Link to = "/cart">
						<Badge badgeContent={this.props.basketProps.basketNumbers} color="primary">
  						<ShoppingCartIcon fontSize="large"/>
						</Badge>
						</Link>
					</Col>
					<Col style={styles.iconleft} span={1}><SearchIcon fontSize="large"/></Col>
    			</Row>
				 
				<Modal
          
          visible={this.state.visible}
          onOk={this.handlelogin}
		  onCancel={this.handleCancel}
		  footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handlelogin}>
              Submit
            </Button>
          ]}
        >
			<center><h3>Log In</h3></center>
			<center><h3>Discover Fashion!</h3></center>
			<center><h6>You are just one step away from signing up</h6></center>
			<br/>
			<Row>
			<Col span={8} offset = {4}>
			<Button icon={<FacebookOutlined />} size="large">Facebook</Button>
			</Col>
			<Col span={8} offset = {2}>
			<Button icon={<GoogleOutlined />} size="large">Google</Button>
			</Col>
			</Row>
			<Divider orientation="center" style={{ color: '#333', fontWeight: 'bold',marginTop:'20px' }}>
     			<h5> Or </h5>
   			</Divider>	
           <form noValidate autoComplete="off">
			   <Row>
				   <Col span={24}>
				   <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-amount">Email/Mobile No.</InputLabel>
          <Input
            id="standard-adornment-amount"/>
        </FormControl>
				  </Col>
				  
				  </Row>
    </form>
         
        </Modal>		
        </div>
     );
  }
} 

const mapStateToProps = state => ({
	basketProps : state.basketState
})
export default connect(mapStateToProps, { getNumbers })(Header); 
