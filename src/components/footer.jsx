import React, { Component } from 'react';
import { Button} from 'antd';

class NavFooter extends Component {
    render() {
        return (
            <div>
                <span> 
                    <h4 className="float-left text-white ml-3 mt-1">Ecosystem</h4>
                    <Button className="btn btn-secondary float-right mr-2 mt-1" type="primary" size='large'> Find Ecosystem </Button>
                </span>
            </div>
        );
    }
}

export default NavFooter;