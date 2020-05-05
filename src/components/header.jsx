import React, { Component } from 'react';
import { Typography, Input, Avatar } from 'antd';
import { BellFilled, SettingFilled, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;

class NavHeader extends Component {
    render() {
        return (
            <div style={{margin: '5px' }}>
                <Title style={{display:'flex', justifyContent:'space-between'}} level={4}>MAINTENANCE SUMMARY
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <Search
                    placeholder="Search.."
                    onSearch={value => console.log(value)}
                    style={{ width: 200, margin: '0 5px' }}
                />   
                    <Avatar icon={<UserOutlined />} style={{margin: '0 5px' }} />
                    <Avatar icon={<BellFilled />} style={{margin: '0 5px' }}/>
                    <Avatar icon={<SettingFilled/>} style={{margin: '0 5px' }} />
                </div>
                </Title>
            </div>
        );
    }
}

export default NavHeader;