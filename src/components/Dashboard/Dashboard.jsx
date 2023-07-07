import { Typography, Grid, makeStyles } from '@material-ui/core';
// import { useParams } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FindInPageIcon from '@material-ui/icons/FindInPage';

const useStyles = makeStyles(() => ({
  root: {
    color: 'white',
    height: '100vh',
    width: '100%',
    paddingBottom: '5%',
  },
  input: {
    backgroundColor: 'white',
  },
}));

const Dashboard = () => {
  // const { searchTerm } = useParams();
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="center" alignItems="center">
      <FormControl>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <FindInPageIcon />
            </InputAdornment>
          }
          className={classes.input}
          placeholder="Noticias a buscar..."
          disableUnderline
        ></Input>
        <Typography>Ingresa palabras clave de noticias a buscar y presiona Enter</Typography>
      </FormControl>
    </Grid>
  );
};

export default Dashboard;
