import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import Carousel from '../Carousel';
import getAllSections from '../../redux/actions/websiteSections';
import { endpoints, carousel } from '../../common';
import './home.scss';
import PageLoader from '../PageLoader';


class Home extends Component {
  async componentDidMount() {
    const { getAllSectionsDispatch } = this.props;
    await getAllSectionsDispatch(endpoints().articlesGetAll);
  }

  render() {
    const { sections } = this.props;
    const carouselSection = sections.find(section => section.category === carousel);

    return (
      <div className="homepage">
        <NavBar />
        <PageLoader />
        {
          carouselSection && carouselSection.images
          && (
            <ScrollAnimation animateIn="fadeIn" duration={2}>
              <Carousel id="homepage" imageUrls={carouselSection.images} />
            </ScrollAnimation>
          )
        }
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
