import React, { Component } from 'react';
import {CardPanel, Input, Row, Button} from 'react-materialize'
import * as firebase from 'firebase'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
     name: ''
    }
    this.login = this.login.bind(this);
    this.create = this.create.bind(this);
  }

  async login(event) {
   event.preventDefault();
   await firebase.auth().signInAnonymously();
   this.create();
  }
  
  create() {
   let now = new Date();
   let user = { id: new Date().getUTCMilliseconds() , name: this.state.name, created_at: now.toDateString() };
   localStorage.setItem( 'user-alkanza', JSON.stringify(user) );
   firebase.database().ref('users').push(user);
   this.props.history.push('test');
  }

  render() {
    return (
      <section className="Login">
        <img src="https://pbs.twimg.com/media/CWtf9fRXAAIbSEg.jpg"  alt="brand"/>
        <CardPanel className="black-text center">
          <Row>
            <form onSubmit={this.login}>
                <Input value={this.state.name} onChange={(e)=> this.setState({ name: e.target.value })} s={12} label="Your Name" required/>
                <Button type="submit" className="yellow darken-2">START</Button>
            </form>
          </Row>
        </CardPanel>
      </section>
    );
  }
}

export default Login;
