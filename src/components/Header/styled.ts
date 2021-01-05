import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContent = styled.div`
width: 100%;
height: 130px;
display: flex;
justify-content: space-between;
`;

export const HeaderImage = styled(Link)`
width: 130px;
margin-left: 50px;
margin-top: 10px;
`;

export const HeaderOptions = styled.div`
width: 70%;
height: 100px;
display: flex;
justify-self: flex-end;
padding: 0 20px;
align-items: center;
justify-content: flex-end;
`;

export const HeaderOption = styled(Link)`
text-decoration: none;
color: rgba(253, 242, 83, 1);
transition: ease-in-out 0.2s all;
padding: 20px;
border: 1px solid rgba(253, 242, 83, 1);
margin: 0 20px;

&:hover {
  color: rgba(229, 177, 58, 1);
  border-color: rgba(229, 177, 58, 1);
}
`;
