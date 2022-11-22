import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components'

interface IButton extends ButtonHTMLAttributes<HTMLElement> {
  color: string
}

export const SampleButton = styled.button<IButton>`
  background-color: ${props => props.color};
  border-color: ${props => props.color};
  border-radius: 3px;
  padding: 10px;
`