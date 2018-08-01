import PropTypes from 'prop-types';
import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  render () {
    const {details, index} = this.props;
    const isAvailable = details.status == 'available';
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out!';
    return (
      <div>
        <li className="menu-fish">
          <img src={details.image} alt="" />
          <h3 className="fish-name">
            {details.name}
            <span className="price">{formatPrice (details.price)}</span>
          </h3>
          <p>{details.desc}</p>
          <button
            onClick={() => this.props.addToOrder (index)}
            disabled={!isAvailable}
          >
            {buttonText}
          </button>
        </li>
      </div>
    );
  }
}

Fish.propTypes = {
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  addToOrder: PropTypes.func.isRequired,
};

export default Fish;
