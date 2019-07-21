import React from 'react';
import './services.scss';
import PropTypes from 'prop-types';

const Services = ({ services }) => (
  <div className="services-page">
    <div className="section-padding">
      <div className="section-heading">
        What we offer
        <hr />
      </div>

      <div className="all-services responsive-flex">
        {services && services.map(service => (
          <div key={service._id} className="service-box responsive-flex-child third">
            <div className="wrapper" style={{ backgroundImage: `url(${service.images[0]})` }}>
              <div className="contents">
                <h4>{service.heading1}</h4>
                <div className="details">{service.body}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

Services.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Services;
