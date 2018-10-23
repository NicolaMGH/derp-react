import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './styles/restaurant.scss';

class Restaurant extends Component {
  render() {
    return (
      <div className="restaurant-container">
        <a className="restaurant-url" href={this.props.restaurant.url}>
          <Media className="content">
            <Media.Left align="middle">
              <img width={64} height={64} src={this.props.restaurant.img} alt="rest img" />
            </Media.Left>
            <Media.Body>
              <Media.Heading>{this.props.restaurant.name}</Media.Heading>
              <p className="text-justify">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </a>
      </div>
    );
  }
}

export default Restaurant;