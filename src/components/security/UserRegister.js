import React, { Component } from 'react';
import { Avatar, Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import LockOutLineIcon from '@material-ui/icons/LockOutlined';

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

class UserRegister extends Component {
    state = {
        user : {
            name: '',
            lastname: '',
            email: '',
            password: ''
        }
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
                            <TextField name="name" fullWidth variant="outlined" label="Ingrese su nombre" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField name="lastname" fullWidth variant="outlined" label="Ingrese sus apellidos" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField name="email" fullWidth variant="outlined" label="Ingrese su e-mail" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField type="password" name="password" fullWidth variant="outlined" label="Ingrese su password" />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item md={6} xs={12}>
                            <Button type="submit" variant="contained" fullWidth size="large" color="primary" style={style.submit}>
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

export default UserRegister;