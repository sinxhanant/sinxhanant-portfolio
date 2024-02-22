import React from 'react'
import styled from "styled-components"


const Card = styled.div`
width: 650px;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0,1);
padding: 12px 16px;
justify-content: space-between;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
gap: 12px;
transition: all 0.3s ease-in-out;

&:hover {

    bax-shadow: 0px 0px 20px rgba(0,0,0,0,2);
    transform: translateY(-5px);
}



@media (max-width: 768px){
    padding: 10px;
    gap: 8px;
    width: 300px;
}

border: 1px solid ${({theme})=> theme.card};
box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
display: flex;
gap: 12px;
width: 100%;
`

const Image = styled.div`
height: 50px;
background-color: #000;
border-radius: 10px;
margin-top: 4px;

@media (max-width: 768px){
    height: 40px;
}
`

const Body = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

const Name = styled.div`
font-size: 18px;
font-weight: 500;
color: ${({theme})=> theme.text_secondary + 99};

@media (max-width: 768px){
    font-size: 12px;
}
`

const Degree = styled.div`
font-size: 14px;
font-weight: 500;
color: ${({theme})=> theme.text_secondary + 99};

@media (max-width: 768px){
    font-size: 12px;
}
`

const Date = styled.div`
font-size: 12px;
font-weight: 400px;
color: ${({theme})=> theme.text_secondary + 80};


@media (max-width: 768px){

    font-size: 10px;
}
`

const Description = styled.div`
font-size: 14px;
width: 100%;
font-weight: 400;
color: ${({theme})=>theme.text_primary + 99};
margin-bottom: 10px;

@media (max-width: 768px){
    font-size: 12px;

}
`;

const Skills = styled.div`
width: 100%;
display: flex;
gap: 12px;
margin-top: 10px;
`;

const ItemWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
`;

const Skill = styled.div`
font-size: 12px;
font-weight: 400;
color: ${({theme})=> theme.text_primary + 99};

@media (max-width: 768px){

    font-size: 12px;
}
`



const EducationCard = ( {education} )=> {
  return (
      
      <Card>
<Top>
<img src={education.img} style={{

height: "50px",
backgroundColor: "#000",
borderRadius: "10px",
marginTop: "4px",

'@media (max-width: "768px")':{
    height: "40px"
},
    }}/>
    <Body>
        <Name>{education.school}</Name>
        <Degree>{education.degree}</Degree>
        <Date>{education.date}</Date>
    </Body>
</Top>

<Description>{education.desc}
{education?.skills && 
<>
<br/>
<Skills>
    <b>Skills:</b>
    <ItemWrapper>

        {education.skills.map((skill) => {
            <Skill>- {skill} </Skill>
        })}
    </ItemWrapper>
</Skills>
</>

}
</Description>

{education.doc && 
<a href={education.doc} target="new">


    </a>
    }
      </Card>

  )
}

export default EducationCard;