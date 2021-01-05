import styled from "styled-components";

export const PeopleContent = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      color: rgba(253, 242, 83, 1);
      font-size: 22px;
      font-weight: bold;
    }
  `;

export const PeopleListContainer = styled.div`
    padding: 10px;
    display: flex;
    margin: 20px;
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  `;