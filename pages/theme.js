import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {  yellow, blue, grey } from '@material-ui/core/colors';
import red from '@material-ui/core/colors/red';
export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary:{
      main:grey[900]},
  },
  status: {
    danger: 'orange',
  },
});