import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import CustomizedSnackBars from '../Components/CustomizedSnackbars';
import { isNumber } from 'util';
class ClientForm extends Component {
	static propTypes = {
		props: PropTypes.object
	}
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			document: '',
			mother_name: '',
			birth_date: '',
			contract_type: '',
			email: '',
			telephone: '',
			status: 'active',
			updating: false,
			open: false,
			fireRedirect: false,
		}
	}

	handleChange = e => {
		const { id, value } = e.target;
		this.setState(() => ({
			[id]: value
		}))
	}
	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		this.setState({ open: false });
	};

	componentDidMount() {
		const { id } = this.props.match.params;

		if(id !== 'new'){
			axios.get(`http://127.0.0.1:8000/api/clients/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'application/json',
					'Access-Control-Allow-Credentials': true,
					'Access-Control-Allow-Origin': '*',
				}
			})
				.then(res => {
					const client = res.data.data;
					return this.setState(client);
				})
		}
	}

	submitHandler(e) {
		e.preventDefault();
		const { id } = this.props.match.params;
		this.setState({ updating: true });
		
		if(id !== 'new'){
			axios.put(`http://127.0.0.1:8000/api/clients/${id}`, this.state, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'application/json',
				'Access-Control-Allow-Credentials': true,
				'Access-Control-Allow-Origin': '*',
			}
		})
			.then(res => {
				const client = res.data.data;
				console.log(client);
				this.setState({ open: true });
				this.setState(client);
				setTimeout(function () {
					this.setState({ fireRedirect: true });
				}.bind(this), 500);

			})
		} else {
			this.setState({status: 'active'})
			axios.post('http://127.0.0.1:8000/api/clients/', this.state, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'application/json',
					'Access-Control-Allow-Credentials': true,
					'Access-Control-Allow-Origin': '*',
				}
			})
				.then(res => {
					console.log(res);
					const client = res.data.data;
					this.setState({ open: true });
					this.setState(client);
					setTimeout(function () {
						this.setState({ fireRedirect: true });
					}.bind(this), 500);
					
				})

		}
	}

	render() {
		const { classes } = this.props;
		const { name, document, birth_date, mother_name, contract_type, email, telephone, fireRedirect } = this.state;
		const { from } = this.props.location.state || '/'

		return (
			<div>
				<Typography variant="h6" gutterBottom>
					Cliente
				</Typography>

				<form onSubmit={event => { this.submitHandler(event); }} className={classes.form} >
					<Grid container spacing={24}>
						<Grid item xs={12} md={12}>
							<TextField
								required
								id="name"
								label="Nome completo"
								fullWidth
								value={name}
								onChange={this.handleChange}
							/>
						</Grid>

						<Grid item xs={12} md={6}>
							<TextField
								required
								id="document"
								label="CPF"
								fullWidth
								value={document}
								onChange={this.handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								required
								id="birth_date"
								label="Data de Nascimento"
								fullWidth
								value={birth_date}
								onChange={this.handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								required
								id="mother_name"
								label="Nome da mãe"
								value={mother_name}
								fullWidth
								onChange={this.handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								required
								id="contract_type"
								label="Tipo de contrato"
								fullWidth
								value={contract_type}
								onChange={this.handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								required
								id="email"
								label="Email"
								fullWidth
								value={email}
								onChange={this.handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								required
								id="telephone"
								label="Telefone"
								fullWidth
								value={telephone}
								onChange={this.handleChange}
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

				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					open={this.state.open}
					autoHideDuration={6000}
					onClose={this.handleClose}
				>
					<CustomizedSnackBars
						onClose={this.handleClose}
						variant="success"
						message="Atualizado com sucesso!"
					/>
				</Snackbar>
				{fireRedirect && (
					<Redirect to={from || '/clients'} />
				)}
			</div>
		)
	}
};

export default withStyles(styles)(ClientForm);

