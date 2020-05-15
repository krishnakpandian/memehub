import React, { Component } from 'react';
import Firestore from './Firestore';
import {RadioGroup, Radio} from 'react-radio-group';
import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core';


class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            gender: ''
        }
    }

    handleChange = (event) => { //Changes State of an Object
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRadioChange = (event) => { //Changes State of an Object
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <label>
                    First Name*<br />
                    <input
                        class="medium"
                        type="text"
                        name="fname"
                        value={this.state.fname}
                        onChange={this.handleChange.bind(this)}
                        placeholder="First Name"
                        maxlength="100"
                    />
                </label>
                <label>
                    Last Name*
        <input
                        class="medium"
                        type="text"
                        name="lname"
                        value={this.state.lname}
                        onChange={this.handleChange.bind(this)}
                        placeholder="Last Name"
                        maxlength="100"
                    />
                </label>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={this.state.gender} onChange={this.handleRadioChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </React.Fragment>
        );
    }
}

export default Join; 