import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Form, Button} from 'react-bootstrap';
import * as actionStep from '../store/actions/index'

class LoginForm extends Component {
    
    render() {
        return (
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
                <Button onClick={this.props.onSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.email,
        password: state.password
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch(actionStep.auth({ emailID:'impact@impactanalytics.co', password: 'impactpassword'}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);