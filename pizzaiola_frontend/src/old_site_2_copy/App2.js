import React, { Component } from 'react'
import axios from 'axios' ;
import WithStyles from './components/DataDisplay.jsx' ;
import {default as StyledNavBar} from './components/navBar' ;
/*
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
*/


class App extends Component{
   
    state = {
        nombre_recurso: 'amelia',
        recursos_opac:[],
        consulta: [],
        indice: '', 
        query: '',
        datos: '' 
    
      };


    
    async componentDidMount() {
      const {data: recursos_opac}  = await axios.get('http://biblioteca.ccpadrevarela.org:19200/_search?q=' + this.state.indice + this.state.query ,
      {
        params: {
            
            q: this.state.nombre_recurso,
            sort: 'signatura:asc',
            size: 10000
         },
      });
     
      this.state.datos = recursos_opac['hits']['hits'] ;
      const datos_recolectados = this.state.datos.map(resultado => resultado['_source']);
      console.log(datos_recolectados) ; 
      this.setState(recursos_opac)
   
      
    
    }
    
    
     
    
    
    handleAdd = () => {
    
    };
    
    handleUpdate = () => {
    };


render() {
  return (
      <div>
          <React.Fragment>
          <StyledNavBar />
          <WithStyles/> 
          </React.Fragment>

      </div>
        )
    }
}


const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 10,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });
  
  
let id = 0;
function createData(no_reg, signatura, autor, autor2, título, descriptores,editorial,resumen,localizacion) {
   id += 1;
  return { id, no_reg, signatura, autor, autor2, título, descriptores,editorial,resumen,localizacion};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function CustomizedTable(props) {
  
  
    
  const { classes } = props;

  return (


  

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>id</CustomTableCell>
            <CustomTableCell align="right">signatura</CustomTableCell>
            <CustomTableCell align="right">autor</CustomTableCell>
            <CustomTableCell align="right">autor2</CustomTableCell>
            <CustomTableCell align="right">título</CustomTableCell>
            <CustomTableCell align="right">descriptores</CustomTableCell>
            <CustomTableCell align="right">editorial</CustomTableCell>
            <CustomTableCell align="right">resumen</CustomTableCell>
            <CustomTableCell align="right">localizacion</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.calories}</CustomTableCell>
              <CustomTableCell align="right">{row.fat}</CustomTableCell>
              <CustomTableCell align="right">{row.carbs}</CustomTableCell>
              <CustomTableCell align="right">{row.protein}</CustomTableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </Paper>
    
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

//Invento
withStyles(styles)(CustomizedTable) ;  




export default App ;

