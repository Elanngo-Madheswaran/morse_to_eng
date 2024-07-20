import React, { Component } from 'react';

class Morse extends Component {
    handleChange = (event) => {
        const value = event.target.value;
        const validMorse = value.split('').filter(char => char === '.' || char === '-' || char === ' ' || char === '/').join('');
        this.props.onChange(validMorse);
    }

    render() {
        return (
            <div className='d-flex m-5 w-75'>
                <label>Morse:</label>
                <input 
                    className='form-control ms-5' 
                    value={this.props.value} 
                    onChange={this.props.readOnly ? null : this.handleChange} 
                    readOnly={this.props.readOnly}
                />
            </div>
        );
    }
}

export default Morse;
