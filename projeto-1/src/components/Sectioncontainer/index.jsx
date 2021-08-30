import P from 'prop-types';
import * as Styled from './style';

export const Sectioncontainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};
Sectioncontainer.propTypes = {
  children: P.node.isRequired,
};
