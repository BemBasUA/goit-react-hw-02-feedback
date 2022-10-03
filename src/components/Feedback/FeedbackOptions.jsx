import { Box } from 'components/Box/Box';

import { Title } from './Feedback.styled';
import { Button } from './Feedback.styled';

const shortid = require('shortid');

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsArray = Object.keys(options);
  return (
    <Box>
      <Title>Please leave feedback</Title>
      {optionsArray.map(option => {
        const result = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <Button
            key={shortid.generate()}
            id={option}
            onClick={onLeaveFeedback}
          >
            {result}
          </Button>
        );
      })}
    </Box>
  );
};
