import React, {useEffect} from 'react'
import { auth, provider } from "../firebase"
import styled from 'styled-components'
import { useHistory } from "react-router-dom"
import {
  selectUserName, 
  selectUserPhoto,
  setUserLogin,
  setSignOut
} from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"


function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() =>{
    auth.onAuthStateChanged(async (user) =>{
      if(user) {
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        history.push('/')
      }
    })
  }, [])

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
      let user = result.user
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
      history.push('/')
    })
  }

  const signOut = () =>{ 
    auth.signOut()
    .then(() =>{
      dispatch(setSignOut());
      history.push("/login")
    })
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer> 
        ):
        <>
          <NavMenu>
            <a href="#example">
              <img alt="image1" src="/images/home-icon.svg"/>
              <span>HOME</span>
            </a>
            <a href="#example1">
              <img alt="image2" src="/images/search-icon.svg"/>
              <span>SEARCH</span>
            </a>
            <a href="#example">
              <img alt="image3" src="/images/watchlist-icon.svg"/>
              <span>WATCHLIST</span>
            </a>
            <a href="#example">
              <img alt="image4" src="/images/original-icon.svg"/>
              <span>ORIGINALS</span>
            </a>
            <a href="#example">
              <img alt="image5" src="/images/movie-icon.svg"/>
              <span>MOVIES</span>
            </a>
            <a href="#example">
              <img alt="image6" src="/images/series-icon.svg"/>
              <span>SERIES</span>
            </a>
          </NavMenu>
      <UserImg onClick={signOut} src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.6435-9/140925141_10159640511591002_6406845988018898475_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ZWdX13Hi_JMAX-xvQaE&_nc_ht=scontent.feoh3-1.fna&oh=1c407137e401f171a89e2c6252a8fced&oe=60CE29E7"/>
        </>
      }
    </Nav>
    
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex; 
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: rgb(245, 245, 245);

    img{
      height: 20px;
    }

    span{
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after{
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover{
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img `
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`

const Login = styled.a `
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 0.2s ease 0s;


  &:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`

const LoginContainer = styled.div `
  flex: 1;
  display: flex; 
  justify-content: flex-end;
`

