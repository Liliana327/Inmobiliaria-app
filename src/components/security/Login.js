import { Avatar, Button, Container, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import { compose } from 'recompose';
import { consumerFirebase } from '../../server';

const style={
    paper: {
        marginTop: 9,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: 5,
        backgroundColor: "#ffb300"
    },
    form: {
        width: "100%",
        marginTop: 8
    }
}


class Login extends Component {

    state = {
        firebase: null,
        user: {
            email: '',
            password: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.firebase === prevState.firebase){
            return null;
        }
        return {
            firebase : nextProps.firebase
        }
    }

    onChange = e => {
        let user = Object.assign({}, this.state.user);
        user[e.target.name] = e.target.value;
        this.setState({
            user : user
        })
    }

    login = e => {
        e.preventDefault();

        const { firebase, user } = this.state;

        firebase.auth
        .signInWithEmailAndPassword(user.email, user.password)
        .then(auth => {
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <Container maxWidth="xs">
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockOutlineIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Ingrese Usuario
                    </Typography>
                    <form style={style.form}>
                        <TextField
                            variant="outlined"
                            label="E-mail"
                            name="email"
                            fullWidth
                            margin="normal"
                            onChange = {this.onChange}
                            value= {this.state.user.email}
                        />
                        <TextField 
                            variant="outlined"
                            label="Password"
                            type="password"
                            name="password"
                            fullWidth
                            margin="normal"
                            onChange = {this.onChange}
                            value = {this.state.user.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.login}
                        >
                            Ingresar
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }
}

export default compose(consumerFirebase) (Login);