import styled from "styled-components";

export const AddUserFormStyled = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  max-width: 320px;

  .form {
    display: flex;
    flex-direction: column;
  }

  .form__label {
    position: relative;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.21;
    color: #414141;
  }

  .form__input {
    line-height: 1.29;
    margin-bottom: 20px;
  }

  .form__errors {
    position: absolute;
    bottom: 4px;
    left: 0;

    font-size: 14px;
    font-weight: 400;
    color: red;
  }

  .form__button {
    align-self: center;
    width: fit-content;
    padding: 5px 10px;

    font-weight: 500;
    font-size: 16px;
    line-height: 1.18;
    color: #414141;

    background-color: #fff;
    border: 1px solid #212121;
    border-radius: 5px;
    cursor: pointer;

    &:hover,
    :focus {
      background-color: #ff6b08;
    }
  }
`;
