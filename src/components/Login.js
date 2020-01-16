import React, {Component} from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {Form, Button} from 'react-bootstrap';
import * as actionStep from '../store/actions/index'

class LoginForm extends Component {
    submit = (event) => {
        event.preventDefault();
        this.props.onSubmit();
    }
    
    render() {
        let isAuth = null;
        if(window.localStorage.getItem('token')) {
            isAuth = <Redirect to='/home'/>
        }
        return (
            <div>
               {isAuth}
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  value={this.props.name} placeholder="Email"/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={this.props.password} placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button  type="submit" onClick={this.submit}>
                    Submit
                </Button>
            </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.email,
        password: state.password,
        token: state.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch(actionStep.auth({ emailID:'impact123@impactanalytics.co', password: 'impactpassword'}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);