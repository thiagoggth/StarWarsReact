import styled from "styled-components";

const notFoundImg = 'https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_960_720.jpg';

export const OptionCardContent = styled.div`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid rgba(253, 242, 83, 1);
    cursor: pointer;
  `;

export const OptionCardImg = styled.div<any>`
    width: 250px;
    height: 300px;
    background-color: #ccc;
    
    background-image: url(${({ uri }) => uri || notFoundImg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 4px;
  `;
export const OptionCardTitle = styled.div`
    text-align: center;
    p {
      font-size: 16px;
      font-weight: bold;
      color: rgba(253, 242, 83, 1);
    }
  `;