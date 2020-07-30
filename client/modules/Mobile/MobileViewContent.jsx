import React from 'react';
import styled from 'styled-components';
import { remSize } from '../../theme';


export default styled.div`
  z-index: 0;
  margin-top: ${props => remSize(props.slimheader ? 50 : 68)};
`;