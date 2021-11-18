import styled from "styled-components";

export const UserItemStyled = styled.div`
  padding: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  background-color: #fff;
  border-radius: 5px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  text-align: start;

  .user__label {
    font-weight: 500;
  }

  .user__name {
    margin-left: 10px;
    font-weight: 700;
  }

  .user__email {
    margin-left: 10px;
    font-weight: 700;
  }

  .user__gender {
    margin-left: 10px;
    font-weight: 700;
  }

  .user__status {
    margin-left: 10px;
    font-weight: 700;
  }
`;
