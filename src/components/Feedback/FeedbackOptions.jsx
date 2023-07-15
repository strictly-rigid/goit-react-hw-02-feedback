import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedBack } = this.props;
    return (
      <ul className={css.btnoptions}>
        {options.map(item => (
          <li key={item}>
            <button onClick={() => onLeaveFeedBack(item)}>
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedBack: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
