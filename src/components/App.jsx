import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Feedback/Statistics';
import { Section } from './Feedback/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = e => {
    if (e.currentTarget.id === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (e.currentTarget.id === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    } else if (e.currentTarget.id === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage =
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100;
    return positiveFeedbackPercentage;
  };

  render() {
    const data = this.state;
    return (
      <Section title="Feedback section">
        <FeedbackOptions
          options={data}
          onLeaveFeedback={this.handleClick}
        ></FeedbackOptions>
        .
        <Statistics
          good={data.good}
          neutral={data.neutral}
          bad={data.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    );
  }
}
