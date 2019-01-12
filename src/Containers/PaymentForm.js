import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Header from '../Components/Header';
import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

class PaymentForm extends Component {

  submitHandler(event) {
    event.preventDefault();
    
    const data = this.state;
    let date = data.birth_date.split("/").reverse().join("-");
    data.birth_date = date;
    data.status = 'active';
    axios.post('http://127.0.0.1:8000/api/clients', data, {
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'application/json',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
    }
  }).then(res => {
      console.log(res);
      this.setState({message: res.data.message, status: res.status})
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2">
            Novo Cliente
            </Typography>
          <Paper className={classes.paper}>
            <form onSubmit={event => { this.submitHandler(event); }} className={classes.form}>

              <Grid container spacing={24}>
                <Grid item xs={12} md={12}>
                  <TextField required id="name" label="Nome completo" fullWidth onChange={(event) => this.setState({ name: event.target.value })}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField required id="document" label="CPF" fullWidth onChange={(event) => this.setState({ document: event.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField required id="birth_date" label="Data de Nascimento" fullWidth onChange={(event) => this.setState({ birth_date: event.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="mother_name"
                    label="Nome da mãe"
                    fullWidth
                    onChange={(event) => this.setState({ mother_name: event.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="contract_type"
                    label="Tipo de contrato"
                    fullWidth
                    onChange={(event) => this.setState({ contract_type: event.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="email"
                    label="Email"
                    fullWidth
                    onChange={(event) => this.setState({ email: event.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField required id="telephone" label="Telefone" fullWidth onChange={(event) => this.setState({ telephone: event.target.value })}
                  />
                </Grid>
              </Grid>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type="submit"

                >
                  Salvar
              </Button>
              </div>
            </form>
          </Paper>

        </main>
      </div>

    )
  }
}


export default withStyles(styles)(PaymentForm);
