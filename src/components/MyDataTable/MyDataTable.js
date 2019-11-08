import React, { Component } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import CONFIG_URL from '../../config/config_url';

class MyDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      columns: [
        {
          name: 'Id',
          selector: 'id',
          sortable: true,
          right: true,
        },
        {
          name: 'Name',
          selector: 'name',
          sortable: true,
          right: true,
        },

        {
          name: 'Selector',
          selector: 'selector',
          sortable: true,
          right: true,
        },
        {
          name: 'Longitude',
          selector: 'longitude',
          sortable: true,
          right: true,
        },
        {
          name: 'Latitude',
          selector: 'latitude',
          sortable: true,
          right: true,
        },
        {
          name: 'Email',
          selector: 'email',
          sortable: true,
          right: true,
        },
        {
          name: 'UserName',
          selector: 'username',
          sortable: true,
          right: true,
        },
        {
          name: 'Password',
          selector: 'password',
          sortable: true,
          right: true,
        },
        {
          name: 'DobDate',
          selector: 'dobdate',
          sortable: true,
          right: true,
        },
        {
          name: 'RegisterDate',
          selector: 'registerdate',
          sortable: true,
          right: true,
        },
        {
          name: 'Phone',
          selector: 'phone',
          sortable: true,
          right: true,
        },
        {
          name: 'Picture',
          selector: 'picture',
          sortable: true,
          right: true,
        },
        {
          name: 'Edit',
          selector: 'edit',
          sortable: true,
          right: true,
        },
        {
          name: 'Delete',
          selector: 'delete',
          sortable: true,
          right: true,
        }
      ]
    }
  }


  componentDidMount() {
    axios.get(CONFIG_URL.list_users_api)
      .then(res => {
        const raw_users = res.data.results;

        let users = [];

        raw_users.forEach(user => {
          let temp_user = {};
          temp_user['id'] = user['id']['value'];
          temp_user['name'] = user['name']['title'] + '. ' + user['name']['first'] + ' ' + user['name']['last'];
          temp_user['selector'] = <FontAwesomeIcon icon={faCheck} />;
          temp_user['longitude'] = user['location']['coordinates']['longitude'];
          temp_user['latitude'] = user['location']['coordinates']['latitude'];
          temp_user['email'] = user['email'];
          temp_user['username'] = user['login']['username'];
          temp_user['password'] = user['login']['md5'];
          temp_user['dobdate'] = user['dob']['date'];
          temp_user['registerdate'] = user['registered']['date'];
          temp_user['phone'] = user['phone'];
          temp_user['picture'] = <img src={user['picture']['medium']} alt="golf" />;
          temp_user['edit'] = <FontAwesomeIcon icon={faEdit} />;
          temp_user['delete'] = <FontAwesomeIcon icon={faTrash} />;
          users.push(temp_user);
        });

        this.setState({ users });
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <DataTable
        title="Users Table"
        columns={this.state.columns}
        data={this.state.users}
      />
    )
  }
}


export default MyDataTable;