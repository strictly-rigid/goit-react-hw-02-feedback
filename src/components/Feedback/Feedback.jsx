import { Component } from 'react';
import Statistics from './Statstics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    ).toFixed(2);

  onLeaveFeedBack = item => {
    this.setState(prevState => {
      return { [item]: (prevState[item] += 1) };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedBack={this.onLeaveFeedBack}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
