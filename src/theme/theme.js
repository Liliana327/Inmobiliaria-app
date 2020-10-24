import { createMuiTheme } from '@material-ui/core/styles';
 
const theme = createMuiTheme({

    typograpy : {
        useNextVariants: true
    },
    palette : {
        primary : {
            main : '#009432'
        },
        common : {
            white : 'white'
        },
        secondary : {
            main : '#fffde7'
        }
    },
    spacing : 10
});

export default theme;