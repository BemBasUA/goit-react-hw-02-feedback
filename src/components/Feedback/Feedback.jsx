import { Component } from 'react';
import { Box } from 'components/Box/Box';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return <Box>{this.state.good}</Box>;
  }
}
