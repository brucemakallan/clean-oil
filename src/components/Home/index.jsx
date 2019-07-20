import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import NavBar from '../NavBar';
import Carousel from '../Carousel';


class Home extends Component {
  state = { }

  render() {
    return (
      <div className="homepage">
        <NavBar />
        <ScrollAnimation animateIn="fadeIn" duration={2}>
          <Carousel
            id="homepage-carousel"
            imageUrls={[
              'https://picsum.photos/id/98/1600/600',
              'https://picsum.photos/id/11/1600/600',
              'https://picsum.photos/id/99/1600/600',
            ]}
            captions={[
              'One',
              'Two',
              'Three'
            ]}
          />
        </ScrollAnimation>
      </div>
    );
  }
}

export default Home;
