import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import { HomeFilled, CommentOutlined, NotificationFilled } from '@ant-design/icons';
import './navbar.scss';

const { Search } = Input;

class Navbar extends Component {
	state = {
		profile: false
	};

	handleProfile = () => {
		this.setState({
			profile: !this.state.profile
		});
	};
	render() {
		return (
			<div id='nav'>
				<Row style={{ height: 'auto', width: '100%', boxShadow: '1px 1px 3px #888888' }}>
					<Col span={6}>
						<img
							src='/images/login/Des_-_2-removebg-preview.png'
							style={{ width: '20%', marginLeft: '3rem', alignItems: 'center' }}
						/>
					</Col>
					<Col span={6} />
					<Col span={6} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Search
							placeholder='input search text'
							onSearch={(value) => console.log(value)}
							style={{ width: 200 }}
						/>
					</Col>
					<Col span={3} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
						<HomeFilled style={{ fontSize: '20px' }} />
						<CommentOutlined style={{ fontSize: '20px' }} />
						<NotificationFilled style={{ fontSize: '20px' }} />
					</Col>
					<Col
						span={3}
						style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
						onClick={this.handleProfile}>
						<div style={{ width: '40px', height: '40px', border: '1px solid', borderRadius: '100%' }} />
					</Col>
					{this.state.profile ? (
						<div
							style={{
								position: 'absolute',
								right: '20px',
								top: '75px',
								padding: '15px 40px',
								boxShadow: '1px 1px 5px #000'
							}}
							className='profile'>
							<p>Profile</p>
							<hr />
							<p>Log Out</p>
						</div>
					) : (
						''
					)}
				</Row>
			</div>
		);
	}
}

export default Navbar;
