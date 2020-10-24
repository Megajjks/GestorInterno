import styled from "styled-components";

export const WrapperFooter = styled.footer`
  display: flex;
  flex-flow: column wrap;
  font-family: "Roboto", sans-serif;
  margin-top: 2rem;
`;

export const WrapperMainSection = styled.div`
  display: grid;
  gap: 20px 10px;
  justify-items: center;
  align-items: start;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-auto-flow: row dense;
  background-color: #f4643e;
  color: #ffffff;
  padding: 1.9rem 4rem;
  width: inherit;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
  @media (max-width: 425px) {
    grid-template-columns: minmax(250px, 1fr);
  }
`;

export const WrapperSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3c3c3b;
  color: #ffffff;
  & > p {
    cursor: pointer;
    font-family: "Barlow", sans-serif;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  & > p {
    font-size: 14px;
    font-family: "Barlow", sans-serif;
  }
  & > h3 {
    font-weight: 500;
    margin: 0;
  }
  & > ul {
    font-weight: 300;
    margin: 0;
    padding: 10px 0;
  }
  & > ul > li {
    list-style-type: none;
    padding: 3px 0;
    cursor: pointer;
  }
  & > img {
    max-width: 120px;
    padding-bottom: 1rem;
  }
`;

export const SocialNetworks = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  & > img {
    max-width: 30px;
    padding: 0 20px;
    cursor: pointer;
  }
`;
