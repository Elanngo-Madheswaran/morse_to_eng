import React, { Component } from 'react';

class Eng extends Component {
    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className='d-flex m-5 w-75'>
                <label>English:</label>
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

export default Eng;
