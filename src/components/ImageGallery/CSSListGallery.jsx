import styled from "styled-components";
export const ListItem = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 15px;
  padding: 0;
  list-style: none;
  /* grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); */
`;
