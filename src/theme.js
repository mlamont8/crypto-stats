import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63a4ff',
            main: '#1976d2',
            dark: '#004ba0',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff6659',
            main: '#d2f2f',
            dark: '#9a0007',
            contrastText: '#fff',
        },

    },

});

export default theme;