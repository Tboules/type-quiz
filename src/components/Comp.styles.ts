import styled from "styled-components";

export const CatWrapper = styled.div`
  select {
    margin-top: 30px;
    width: 500px;
    height: 35px;
    border-radius: 4px;
    background-image: linear-gradient(180deg, #fff, #ffcc91);
    color: rgb(60, 60, 60);
    border: none;
    box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.25);
  }

  option {
    background-color: #ffcc9191;
    color: rgb(60, 60, 60);
    user-select: none;
  }
`;

export const QWrapper = styled.div`
  max-width: 1100px;
  background: #ffad66e0;
  border-radius: 8px;
  border: 2px solid #d38558;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
    color: rgb(50, 50, 50);
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #43edef, #57c9ea)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(2deg, #0b8e4c, #decc4d)"};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
