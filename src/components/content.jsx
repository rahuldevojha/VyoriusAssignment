import React, { Component } from 'react';
import {Switch} from 'antd';

class NavContent extends Component {
    
    // onChange(checked) {
    //     console.log(`switch to ${checked}`);
    // }
    
    render() {
        return (
            <div style={{margin: '10px' }} className="float-left">
                <img src={require('./Air1.png')} alt="Drone Logo Red" height="30" width="30"/>
                <span style={{margin: '0 80px 0 5px' }}>Aircraft Down
                    <Switch size='small' style={{margin: '5px' }}/>
                </span>
                
                <img src={require('./Air2.png')} alt="Drone Logo Red" height="30" width="30"/>
                <span style={{margin: '0 80px 0 5px' }}>Inspection Due
                    <Switch size='small' style={{margin: '5px' }}/>
                </span>
                
                <img src={require('./Air3.png')} alt="Drone Logo Red" height="30" width="30"/>
                <span style={{margin: '0 0 0 5px'}}>Aircraft Up
                    <Switch size='small' style={{margin: '5px' }}/>
                </span>
                
            </div>
        );
    }
}

export default NavContent;