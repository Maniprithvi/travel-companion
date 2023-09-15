import {  makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

 const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    alignItems:'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  h5:{
    display:'flex',
    alignItems:'center'

  },
  search: {
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-arround",
    gap:theme.spacing(2),
    alignItems:"center",
    background:'white',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    margin: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(2, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },
}));
export default useStyles;