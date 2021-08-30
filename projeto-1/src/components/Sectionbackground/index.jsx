import P from 'prop-types';
import * as Styled from './style';
import { Sectioncontainer } from '../Sectioncontainer';

export const Sectionbackground = ({ children, background = false }) => {
  return (
    <Styled.Container background={background}>
      <Sectioncontainer>{children}</Sectioncontainer>
    </Styled.Container>
  );
};

Sectionbackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
