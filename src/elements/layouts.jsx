import styled from 'styled-components';
import { MUI_PALETTE } from '../utils/theme';

// Background image
import background from "../assets/jpg/nature.jpg";

// Layout for search component
export const Main = styled.div`
  color: ${MUI_PALETTE.primary.main};
  padding:20px 100px;
  background-color: rgba(255,255,255,0.89);
  min-height: 50%;
  width: 90%;
  margin: auto;
  font-size: 1.3rem;
`;

// Layout Page
export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Head = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    
`;

export const Content = styled.div`
    overflow-y: auto;
`;

// Job detail row
export const DetailRow = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const DetailColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainArea = styled.div`
  padding-top: 20px;
  width: 80%;
  margin:auto;
`;
// Skill Line

export const SkillLine = styled.div`
    height: 25px;
    align-items: center;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-template-rows: auto;
    border: 1px solid transparent;
`;

export const SkillHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr 8fr;
    align-items: center;
    margin-bottom: 15px;
`;

export const SkillName = styled.div`
    font-weight: bold;
    color: ${MUI_PALETTE.primary.main};
`;

export const SkillElement = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;

export const SkillELementFirst = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
`;