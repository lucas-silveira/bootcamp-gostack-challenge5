import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  padding: 30px;
  margin: 80px auto;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h1 {
    display: flex;
    align-items: center;
    font-size: 20px;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 30px;

  input {
    flex: 1;
    font-size: 16px;
    padding: 10px 15px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #7159c1;
  padding: 0 15px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
`;
