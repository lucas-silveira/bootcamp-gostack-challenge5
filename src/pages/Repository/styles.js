import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    margin-top: 20px;
    border-radius: 50%;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    max-width: 400px;
    margin-top: 5px;
    color: #555;
    font-size: 14px;
    text-align: center;
    line-height: 1.4;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border: 2px solid #eee;
    border-radius: 50%;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        color: #333;
        text-decoration: none;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        height: 20px;
        color: #333;
        background-color: #eee;
        font-size: 12px;
        font-weight: 600;
        padding: 3px 4px;
        margin-left: 10px;
        border-radius: 2px;
      }
    }

    p {
      color: #999;
      font-size: 12px;
      margin-top: 5px;
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;

  button {
    padding: 8px;
    margin: 0 0.25rem;
    outline: 0;
    border: 0;
    border-radius: 4px;

    &:nth-child(${props => props.active + 1}) {
      color: #fff;
      background-color: #576574;
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding-top: 15px;

  button {
    padding: 8px;
    outline: 0;
    border: 0;
    border-radius: 4px;
    transition: opacity 250ms ease-out;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
