import React, { Component } from 'react';
import { LogoutOutlined } from '@ant-design/icons';

class NavSlider extends Component {
    render() {
        return (
            <div style={{margin: '10px' }}>
                <p> 
                    <img src={require('./Logo.png')} alt="Logo" height="40" width="40"/> 
                    <span>VYORIUS</span> 
                </p> 
                <img src={require('./Pic.png')} alt="MICHEL" height="100" width="120"/> 
            </div>
        );
    }
}

export default NavSlider;