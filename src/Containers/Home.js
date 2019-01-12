import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Table from '../Components/Table';
import axios from 'axios';

class Dashboard extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/clients', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(res => {
        const users = res.data.data;
        console.log(users);
        return this.setState({ users: users });

      })
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2"> Parceiros </Typography>
        <div>
          {users.length > 0 ? <Table data={users} /> : ''}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Dashboard;


