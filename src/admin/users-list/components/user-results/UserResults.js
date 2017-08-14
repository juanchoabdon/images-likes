import React, { Component } from 'react';
import {Modal, Preloader, Row} from 'react-materialize'
import * as firebase from 'firebase'

declare var $;

class UserResults extends Component {
   
    constructor(props) {
       super(props);
       this.state = {
         likes: [],
         loading: false
       }
       this.setUserLikes = this.setUserLikes.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.id) {
          $('#results-modal').modal('open');
          this.setUserLikes(nextProps.user);
        }
    }

    setUserLikes(user) {
      this.setState({loading: true});
      const likesRef = firebase.database().ref('likes');
      likesRef.orderByChild("uid").equalTo(user.id).on("value", (snapshot)=> {
        let likes = [];
        snapshot.forEach((child) => {
          likes.push(child.val())
         });
         this.setState({likes , loading: false}, ()=> {
           $('.carousel').carousel();
         });
      });
    }


  render() {

    return (
      <div className="UserResults">
       <Modal  id='results-modal'  header={`${this.props.user.name} Results`}>
      
         { !this.state.loading && 
          <div className="carousel">
            { this.state.likes.map((like, index) => 
              <a key={index} className="carousel-item"><img src={like.image}/></a>
              )
            }
          </div>  
         }
         { this.state.loading &&
           <Row className="center">
             <Preloader className="center" flashing/> 
           </Row>
         }
    
        </Modal>
      </div>
    );
  }
}

export default UserResults;
