import { createMuiTheme } from '@material-ui/core/styles';
 
const theme = createMuiTheme({

    typograpy : {
        useNextVariants: true
    },
    palette : {
        primary : {
            main : '#10ac84'
        },
        common : {
            white : 'white'
        },
        secondary : {
            main : '#FDA7DF'
        }
    },
    spacing : 10
});

export default theme;