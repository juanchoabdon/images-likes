import React, { Component } from 'react';
import {Table, Icon, Button} from 'react-materialize'
import * as firebase from 'firebase'
import UserResults from './components/user-results/UserResults';

class  UsersList extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: {}
    }
    this.setUsers = this.setUsers.bind(this);
  }

  componentDidMount() {
      this.setUsers()
  }

  setUsers() {
   const usersRef = firebase.database().ref('users');
   usersRef.on('value', snapshot => {
      let users = [];
      snapshot.forEach((child) => {
        users.push(child.val())
       });
       this.setState({users})  
    })
  }
   
  render() {
    return (
      <section className="UsersList">
        <img  className="brand" src="https://pbs.twimg.com/media/CWtf9fRXAAIbSEg.jpg"  alt="brand"/>
        <Table className="striped">
            <thead>
                <tr>
                    <th data-field="id">Name</th>
                    <th data-field="id">Created at</th>
                    <th data-field="id">Actions</th>
                </tr>
            </thead>
        
            <tbody>
             {  this.state.users.map( (user, index) => 
            
               <tr key={index}>
                <td> {user.name} </td>
                <td> {user.created_at} </td>
                <td>  
                  <Button className="white" onClick={()=> this.setState({selectedUser: user})}>
                   <Icon className="yellow-text text-accent-4" small>insert_chart</Icon> 
                  </Button>
                </td>
               </tr>
            
              )
             }
            </tbody>
         </Table>
         <UserResults user={this.state.selectedUser}></UserResults>
      </section>
    );
  }
}

export default UsersList;
