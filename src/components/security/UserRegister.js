import React, { Component } from 'react';
import { Avatar, Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import LockOutLineIcon from '@material-ui/icons/LockOutlined';
import { compose } from 'recompose';
import { consumerFirebase } from '../../server';

const style = {
    paper : {
        marginTop : 8,
        display : "flex",
        flexDirection : "column",
        alignItems : "center"
    },
    avatar : {
        margin : 8,
        backgroundColor: "#ffb300"
    },
    form : {
        width : "100%",
        marginTop: 10
    },
    submit : {
        marginTop : 20,
        marginBottom: 20
    }
}

const initialUser = {
    name: '',
    lastname: '',
    email: '',
    password: ''
}

class UserRegister extends Component {
    state = {
        firebase: null,
        user : {
            name: '',
            lastname: '',
            email: '',
            password: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){

        if(nextProps.firebase === prevState.firebase){
            return null;
        }
        return {
            firebase: nextProps.firebase
        }
    }

    onChange = e => {
        let user = Object.assign({}, this.state.user);
        user[e.target.name] = e.target.value;
        this.setState({
            user: user,
        })
    }

    UserRegister =  e => {
        e.preventDefault();
        console.log('imprimir objeto usuario del state', this.state.user);
        const { user, firebase } = this.state;

        firebase.auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(auth => {

            const userDB = {
                userId: auth.user.uid,
                email: user.email,
                name: user.name,
                lastname: user.lastname
            };

            firebase.db
            .collection("Users")
            .add(userDB)
            .then(userAfter => {
                console.log('esta insercion fue un exito', userAfter);
                this.props.history.push('/');
            })
            .catch(error => {
                console.log('erros', error);
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
          <Container maxWidth="md">
              <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockOutLineIcon />
                </Avatar>
                <Typography component="h1" variant="h5" color="primary">
                    Registra tu cuenta.
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <TextField name="name" onChange={this.onChange} value={this.state.user.name} fullWidth variant="outlined" label="Ingrese su nombre" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField name="lastname" onChange={this.onChange} value={this.state.user.lastname} fullWidth variant="outlined" label="Ingrese sus apellidos" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField name="email" onChange={this.onChange} value={this.state.user.email} fullWidth variant="outlined" label="Ingrese su e-mail" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField type="password" name="password" onChange={this.onChange} value={this.state.user.password} fullWidth variant="outlined" label="Ingrese su password" />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item md={6} xs={12}>
                            <Button type="submit" onClick={this.UserRegister} variant="contained" fullWidth size="large" color="primary" style={style.submit}>
                                Registrar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
              </div>
          </Container>
        );
    }
}

export default compose(consumerFirebase)(UserRegister);