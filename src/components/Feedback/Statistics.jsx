import { Box } from 'components/Box/Box';
import { ListItem } from './Feedback.styled';
import { Title } from './Feedback.styled';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <Box as="ul">
      <Title>Statistics</Title>
      <ListItem>Good: {good} </ListItem>
      <ListItem>Neutral: {neutral}</ListItem>
      <ListItem>Bad: {bad}</ListItem>
      <ListItem>Total: {total}</ListItem>
      <ListItem>
        Positive feedback: {(positivePercentage || 0).toFixed(0)}%
      </ListItem>
    </Box>
  );
};
