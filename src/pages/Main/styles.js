import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-top: 30px;

  input {
    flex: 1;
    font-size: 16px;
    padding: 10px 15px;
    border: 1px solid ${props => (props.error ? '#ff6b6b' : '#eee')};
    border-radius: 4px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #7159c1;
  padding: 0 15px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
