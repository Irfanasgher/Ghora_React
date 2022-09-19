import React, { Component } from 'react';
import { Row, Col, Tabs, Button, Input, Menu, Cascader, Dropdown } from 'antd';
import UploadImage from '../editProfile/uploadImage/uploadImage';
import { DownOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
function callback(key) {
	console.log(key);
}
const { TextArea } = Input;

const options = [
	{
		value: 'Horses',
		label: 'Horses'
	},
	{
		value: 'Dogs',
		label: 'Dogs'
	},
	{
		value: 'Cats',
		label: 'Cats'
	},
	{
		value: 'Other',
		label: 'Other'
	}
];

const menu = (
	<Menu>
		<Menu.Item>
			<a target='_blank' rel='noopener noreferrer'>
				Horses
			</a>
		</Menu.Item>
		<Menu.Item>
			<a target='_blank' rel='noopener noreferrer'>
				Cats
			</a>
		</Menu.Item>
		<Menu.Item>
			<a target='_blank' rel='noopener noreferrer'>
				Dogs
			</a>
		</Menu.Item>

		<Menu.Item>
			<a target='_blank' rel='noopener noreferrer'>
				Others
			</a>
		</Menu.Item>
	</Menu>
);

const Demo = () => (
	<Tabs defaultActiveKey='1' onChange={callback}>
		<TabPane tab={<span>Post</span>} key='1'>
			<TextArea rows={4} placeholder='Write something...' />
			<div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0px 10px 10px' }}>
				<Button type='primary'>Post</Button>
			</div>
		</TabPane>
		<TabPane tab='Photo/Video' key='2'>
			<UploadImage />
			<Cascader options={options} onChange={onChange} placeholder='Category' />
			{/* <Dropdown overlay={menu} arrow>
				<div style={{ border: '1px solid gray', width: '155px' }}>
					<Button style={{ border: '0' }}>
						Category <DownOutlined />
					</Button>
				</div>
			</Dropdown> */}
			<div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
				<Button type='primary'>Post</Button>
			</div>
		</TabPane>
	</Tabs>
);

function onChange(value) {
	console.log(value);
}

class UploadSection extends Component {
	state = {};
	render() {
		return (
			<div>
				<Row>
					<Col span={3} />
					<Col span={12}>
						<Demo />{' '}
					</Col>
					<Col span={1} />
					<Col span={7}>
						<div className='d-flex align-items-center' style={{ marginTop: '50px' }}>
							<img
								src='images/horse-running.jpg'
								style={{ width: '70px', height: '70px', borderRadius: '50%' }}
							/>
							<div style={{ marginLeft: '10px' }}>
								<h1 style={{ fontSize: '16px' }}>azeemaleem1005</h1>
								<p style={{ fontSize: '14px' }}>Azeem Aleem</p>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default UploadSection;
