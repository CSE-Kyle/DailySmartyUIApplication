import React, {Component} from 'react';

class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 105, // return this.props.size if it exists, return 105 if it doesn't exist
            width: this.props.size ? this.props.size : 105,
            
        }

        return (
            <div className="logo-main">
                <img style={size} alt="Daily Smarty Logo" src="/assets/ds_circle_logo.png"/>
            </div>
        )
    }
}

export default Logo;