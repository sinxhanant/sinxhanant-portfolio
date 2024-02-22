
import React, {useState} from 'react'
import styled from "styled-components"
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';



const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 40px 0px 80px 0px;

@media (max-width: 960px){

    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
gap: 12px;
padding: 10px 0 100px 0;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ToggleGroup = styled.div`
display: flex;
border: 1.5px solid ${({theme})=>theme.primary};
color: ${({theme})=>theme.primary};
font-size: 16px;
border-radius: 12px;
font-weight: 500;
margin: 22px 0;

@media (max-width: 768px){

    font-size: 12px;

}
`

const ToggleButton = styled.div`

    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;

    ${({ active, theme })=>
    active && `
    background-color: ${theme.primary+20};

    &:hover {
        background-color: ${({theme})=> theme.primary + 8};
    }

    @media (max-width)

`
}
`

const Divider = styled.div`
width: 1.5px;
background-color: ${({theme})=>theme.primary};
`;

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 28px;
`

const Projects = ( {Projects} )=> {

    const [toggle, setToggle] = useState("all");

  return (
   <Container id="projects"> 
<Wrapper>
    <Title>Projects</Title>
    <Desc>
    </Desc>

    <ToggleGroup>
    {toggle === 'all' ? (  <ToggleButton active onClick={()=> setToggle('all')}> ALL </ToggleButton>):(<ToggleButton onClick={()=> setToggle('all')}> ALL</ToggleButton>)}      <Divider />
      
       
       {toggle === "web app" ? (  <ToggleButton active onClick={()=> setToggle("web app")}> WEB APPS </ToggleButton>):(<ToggleButton onClick={()=> setToggle("web app")}> WEB APPS </ToggleButton>)}
      <Divider />
      {toggle === "machine learning" ? (  <ToggleButton active onClick={()=> setToggle("machine learning")}> MACHINE LEARNING </ToggleButton>):(<ToggleButton onClick={()=> setToggle("machine learning")}> MACHINE LEARNING </ToggleButton>)}
    </ToggleGroup>
    <CardContainer>

        {toggle === 'all' && projects.map((project) => (<ProjectCard project={project}/>))}
        {projects.filter((item)=> item.category === toggle).map((project)=>(
            <ProjectCard project={project} />
        ))}


    </CardContainer>
</Wrapper>

   </Container>
  )
}


export default Projects;