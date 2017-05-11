import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        this.setState(function() {
            return {
                username: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onSubmit(
            this.props.id,
            this.state.username,
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="column">
                <label htmlFor="username" className="header">{this.props.label}</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Github username" 
                    autoComplete="off" 
                    value={this.state.username}
                    onChange={this.handleChange}/>
                <button 
                    className="button" 
                    type="submit" 
                    disabled={!this.state.username}>Submit</button>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

PlayerInput.defaultProps = {
  label: 'Username',
}

export default PlayerInput;
