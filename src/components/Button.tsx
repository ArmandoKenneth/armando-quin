import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components'

import { ButtonProps } from 'antd/lib/button/button';

import { Button } from 'antd';

interface IButton extends ButtonProps {
}

// export const SampleButton = styled.button<IButton>`
//   background-color: ${props => props.color};
//   border-color: ${props => props.color};
//   border-radius: 3px;
//   padding: 10px;
// `

export const SampleButton: React.FunctionComponent<IButton> = styled(Button)`
  background-color: red;
`