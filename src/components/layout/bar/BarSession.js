import { Button, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    sectionDesktop : {
        display : "none",
        [theme.breakpoints.up("md")] : {
            display : "flex"
        }
    },
    grow : {
        flexGrow : 1
    }
})

class BarSession extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Toolbar>
                    <Typography variant="h6">
                        Liliana Home
                    </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.sectionDesktop}>
                        <Button >Login</Button>
                    </div>
                </Toolbar>
            </div>
        );
    }
}

export default withStyles(styles)(BarSession);