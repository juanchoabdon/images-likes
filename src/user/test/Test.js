import React, { Component } from 'react';
import { CardPanel, Button, Row } from 'react-materialize';
import * as firebase from 'firebase';
import api from '../../api';

class Test extends Component {
    constructor(props) {
      super(props);
      this.state = {
        images: [],
        loading: false
      }
      this.setRamdomImages = this.setRamdomImages.bind(this);
      this.setFavouriteImage = this.setFavouriteImage.bind(this);
    }

    componentDidMount() {
        this.setRamdomImages();
    }


   async setRamdomImages() {
     this.setState({loading: true})
     let imageOne = await api.getRandomImage();
     let imageTwo = await api.getRandomImage();
       let images = [
        imageOne.urls.regular,
        imageTwo.urls.regular
       ]
     this.setState({images, loading: false});
    }

    setFavouriteImage(image) {
      this.setState({loading: true});
      let now = new Date();
      let like = {
        image: image,
        uid:  JSON.parse(localStorage.getItem('user-alkanza')).id,
        date: now.toDateString()
      }
      firebase.database().ref('likes').push(like);
      this.setRamdomImages();
    }

  render() {
    return (
      <section className="Test">
        <img  className="brand" src="https://pbs.twimg.com/media/CWtf9fRXAAIbSEg.jpg" alt="brand"/>
        <div className="test-cards">
        { this.state.images.map((image,index) =>
        
            <CardPanel className="black-text card-img center" key={index}>
              <img src={image} alt="imageOne"/>
            <Row>
               <Button onClick={()=> this.setFavouriteImage(image)} className={"yellow darken-2 " + 
               (this.state.loading ? 'disabled' : '')} waves='light'>Like</Button>
            </Row>
            </CardPanel>
    
           )
        }
        </div>
      </section>
    );
  } 
}

export default Test;
