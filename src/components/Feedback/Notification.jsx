import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className={css.notification}>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
