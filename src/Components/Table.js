import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ClientForm from '../Containers/ClientForm';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};


class SimpleTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
    console.log(this.state)
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell >#</TableCell>
              <TableCell  >Cliente</TableCell>
              <TableCell  >Documento</TableCell>
              <TableCell  >Tipo</TableCell>
              <TableCell  >Data da venda	</TableCell>
              <TableCell  >Status	</TableCell>
              <TableCell  >Ações	</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row">
                    {n.id}
                  </TableCell>
                  <TableCell >{n.name}</TableCell>
                  <TableCell >{n.document}</TableCell>
                  <TableCell >{n.contract_type}</TableCell>
                  {/* <TableCell>{n.parceiro}</TableCell> 
                    <TableCell>{n.produto}</TableCell>  */}
                  <TableCell >{n.birth_date}</TableCell>
                  <TableCell >{n.status}</TableCell>
                  <TableCell >
                    <Link style={{textDecoration: 'none'}} to={`/clients/${n.id}`} component={ClientForm}>
                      <Button variant="contained" color="primary" size="small" className={classes.button}>
                        Visualizar
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}


SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(SimpleTable);