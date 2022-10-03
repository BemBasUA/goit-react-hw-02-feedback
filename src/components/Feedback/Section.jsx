import { Box } from 'components/Box/Box';
import { Title } from './Feedback.styled';

export const Section = ({ title, children }) => {
  return (
    <Box as="section">
      <Title>{title}</Title>
      {children}
    </Box>
  );
};
