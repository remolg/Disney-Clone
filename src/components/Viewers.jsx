import React from 'react'
import styled from 'styled-components'
import viewersDisney from '../images/viewers-disney.png'
import viewersPixar from '../images/viewers-pixar.png'
import viewersMarvel from '../images/viewers-marvel.png'
import viewersStarwars from '../images/viewers-starwars.png'
import viewersNational from '../images/viewers-national.png'
import videosDisney from '../videos/1564674844-disney.mp4'
import videosPixar from '../videos/1564676714-pixar.mp4'
import videosMarvel from '../videos/1564676115-marvel.mp4'
import videosStarwars from '../videos/1608229455-star-wars.mp4'
import videosNational from '../videos/1564676296-national-geographic.mp4'

export const Viewers = (props) => {
    return (
        <Container>
            <Wrap>
                <img src={viewersDisney} alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videosDisney} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersPixar} alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videosPixar} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersMarvel} alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videosMarvel} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersStarwars} alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videosStarwars} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src={viewersNational} alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={videosNational} type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    padding: 30px 0px 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        inset: 0px;
        display: block;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);

        video {
            opacity: 1;
        }
    }

`;