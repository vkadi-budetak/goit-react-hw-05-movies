import styled from 'styled-components';

export const StyledAppContainer = styled.div`       
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  .header-link {
    color: black;
    border: 1px solid black;
    border-radius: 10px;
    display: inline-block;
    margin-top: 30px;
    padding: 20px;
    font-size: 22px;
    text-decoration: none;
    margin-right: 15px;

    transition: all 0.3s;

    &.active {
      border: 1px solid white;
      background-color: black;
      color: white;
    }
  }
  .aboutMov {
    color: blue;
    display: flex;
    // text-decoration: none;
  }

  .btnGoBag {
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    display: inline-block;
    margin: 10px 10px;
    padding: 3px;
    text-decoration: none;
    transition: all 0.3s;
  }

  .styledMovie {
    display: flex;
    border-top: 1px solid black
    pading: 10px;
  }

  .styledMovieList {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
  }

  .imgPlaceHolder {
    height: auto;
    width: 400px;
    max-width: 100%;
  }
`;
