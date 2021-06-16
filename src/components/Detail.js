import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://www.muycomputer.com/wp-content/uploads/2020/10/UCM.jpg"/>
      </Background>
      <ImgTitle>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png"/>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png"/>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png"/>
        </GroupWatchButton>
      </Controls>
      <Subtitle>
        2012 • 90min • Family, Fantasy, Kids, Animation
      </Subtitle>
      <Description>
        El equipo de superhéroes más espectacular de todos los tiempos con iconos como Anthony Stark / Iron Man, El Increíble Hulk, Thor, Steven Rogers / Capitán América, Clinton Barton / Hawkeye y Natalia Romanoff / Black Widow. Cuando un enemigo inesperado amenaza con poner en peligro la seguridad mundial, Nicholas Fury, Director de la agencia internacional para el mantenimiento de la paz, conocida con el nombre de S.H.I.E.L.D., necesita encontrar urgentemente un equipo que salve al mundo del mayor de los desastres. Así empieza una búsqueda por todo el mundo para reclutar personal.
      </Description>
    </Container>
  )
}

export default Detail


const Container = styled.div `
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const ImgTitle = styled.div `
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;


  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`

const Controls = styled.div `
  display: flex;
  align-items: center;


`

const PlayButton = styled.div `
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 1.8px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex; 
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  cursor: pointer;
  color: black;
  font-weight: bold;

  &:hover {
    background: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton) `
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`

const AddButton = styled.button `
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`

const GroupWatchButton = styled(AddButton) `
  background: rgb(0, 0, 0);
`

const Subtitle = styled.div `
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`
const Description = styled.div `
  line-height: 1.4;
  font-size: 17px;
  margin-top: 16px;
  color: rgb(249, 249, 249);



`