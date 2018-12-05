import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(id, name, type, parceiro, produto, date, status) {
  id += 1;
  return { id, name, type, parceiro, produto, date, status };
}

const data = [
  createData('545867', 'IRACELES DE ALMEIDA', 'CAIXA', 'PL PRESTADORA SP JORGE', 'PREVASSIST', '13/08/2018 ', 'Pendencia'),
  createData('548606', 'MARLENE ARAUJO DA SILVA ', 'CAIXA', 'PL PRESTADORA SP JORGE', 'PREVASSIST', '13/08/2018 ', 'Pendencia'),
  createData('549029', 'MARIA CECILIA DE OLIVEIRA ', 'CAIXA', 'PL PRESTADORA SP JORGE', 'PREVASSIST', '13/08/2018 ', 'Aguardando físico'),
  createData('549712', 'DOMINGOS FRANCISCO DOS SA...', 'CAIXA', 'PL PRESTADORA SP JORGE', 'PREVASSIST', '13/08/2018 ', 'Ativo'),
  createData('549712', 'IRACELES DE ALMEIDA', 'CAIXA', 'PL PRESTADORA SP JORGE', 'PREVASSIST', '13/08/2018 ', 'Pendencia'),

];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell >Cliente</TableCell>
            <TableCell >Tipo</TableCell>
            <TableCell >Parceiro</TableCell>
            <TableCell >Produto</TableCell>
            <TableCell >Data da venda	</TableCell>
            <TableCell >Status	</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.id}
                </TableCell>
                <TableCell>{n.name}</TableCell>
                <TableCell>{n.type}</TableCell>
                <TableCell>{n.parceiro}</TableCell>
                <TableCell>{n.produto}</TableCell>
                <TableCell>{n.date}</TableCell>
                <TableCell>{n.status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);