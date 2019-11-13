import React, { Component } from 'react';
import MyMap from '../MyMap/MyMap';
import axios from 'axios';
import MyDataTable from '../MyDataTable/MyDataTable';
import CONFIG_URL from '../../config/config_url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      columns: [
        {
    //       Header: 'Name',
    // accessor: 'name'
          Header: 'Id',
          accessor: 'id',
        },
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Selector',
          accessor: 'selector',
        },
        {
          Header: 'Longitude',
          accessor: 'longitude',
        },
        {
          Header: 'Latitude',
          accessor: 'latitude',
        },
        {
          Header: 'Email',
          accessor: 'email',
        },
        {
          Header: 'UserName',
          accessor: 'username',
        },
        {
          Header: 'Password',
          accessor: 'password',
        },
        {
          Header: 'DobDate',
          accessor: 'dobdate',
        },
        {
          Header: 'RegisterDate',
          accessor: 'registerdate',
        },
        {
          Header: 'Phone',
          accessor: 'phone',
        },
        {
          Header: 'Picture',
          accessor: 'picture',
        },
        {
          Header: 'Edit',
          accessor: 'edit',
        },
        {
          Header: 'Delete',
          accessor: 'delete',
          
        }
      ]
    }
  }


  _deleteUser = (dictionary) => {
    let data = this.state.users;
    data.splice(data.indexOf(dictionary), 1);
    console.log(data.length);
    this.setState({ users: data });
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
          temp_user['picture'] = <img id="image" src={user['picture']['medium']} alt="golf" />;
          temp_user['edit'] = <button onClick={() => { this._deleteUser(temp_user) }}><FontAwesomeIcon icon={faEdit} /></button>
          // temp_user['edit'] = <button onClick={()=>{ alert('alert'); }}><FontAwesomeIcon icon={faEdit} /></button>
          temp_user['delete'] = <FontAwesomeIcon icon={faTrash} />;
          users.push(temp_user);
        });

        this.setState({ users });
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div>
        <MyDataTable dataFromParent={this.state.users} data1={this.state.columns} />
        <MyMap data2={this.state.users} />
      </div>
    );
  }
}

export default Parent;