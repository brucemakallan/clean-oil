import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import Carousel from '../Carousel';
import getAllSections from '../../redux/actions/websiteSections';
import {
  endpoints, carousel, localFiles, service, about, contact,
} from '../../common';
import './home.scss';
import PageLoader from '../PageLoader';
import Services from '../Services';
import About from '../About';
import Contacts from '../Contacts';


class Home extends Component {
  async componentDidMount() {
    const { getAllSectionsDispatch } = this.props;
    await getAllSectionsDispatch(endpoints().articlesGetAll);
  }

  render() {
    const { sections } = this.props;
    const carouselSection = sections.find(section => section.category === carousel);
    const services = sections.filter(section => section.category === service);
    const aboutSection = sections.find(section => section.category === about);
    const contacts = sections.filter(section => section.category === contact);

    return (
      <div className="homepage">
        <NavBar />
        <PageLoader />

        <div className="page-header">
          {carouselSection && carouselSection.images
          && (
            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
              <Carousel id="homepage" imageUrls={carouselSection.images} />
            </ScrollAnimation>
          )}
        </div>

        <div className="main-body" style={{ backgroundImage: `url(${localFiles.images.crossword})` }}>
          {aboutSection && aboutSection.body && (
            <ScrollAnimation animateIn="bounceInUp" duration={1} delay={2} animateOnce>
              <About aboutSection={aboutSection} />
            </ScrollAnimation>
          )}

          {services && services.length > 0 && (
            <ScrollAnimation animateIn="bounceInUp" duration={1} animateOnce>
              <Services services={services} />
            </ScrollAnimation>
          )}

          {contacts && contacts.length > 0 && (
            <ScrollAnimation animateIn="bounceInUp" duration={1} animateOnce>
              <Contacts contacts={contacts} />
            </ScrollAnimation>
          )}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getAllSectionsDispatch: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = ({ sectionsReducer }) => ({
  sections: sectionsReducer.sections,
});
const mapDispatchToProps = {
  getAllSectionsDispatch: getAllSections,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
