import styled from "styled-components";

export const HeaderStyled = styled.header`
  border: 1px solid #212121;

  .header__navlink {
    display: inline-block;
    padding: 10px;

    &:hover,
    :focus {
      color: #ff6b08;
      font-weight: 600;
    }
  }

  .header__navlink--active {
    color: #ff6b08;
  }
`;
