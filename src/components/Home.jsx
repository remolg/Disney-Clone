import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ImgSlider } from './ImgSlider'
import { Viewers } from './Viewers'
import { Recommends } from './Recommends'
import { NewDisney } from './NewDisney'
import { Originals } from './Originals'
import { Trending } from './Trending'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserName } from '../features/user/userSlice'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { setMovies } from '../features/movie/movieSlice'

export const Home = (props) => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {

        onSnapshot(collection(db, 'movies'), (snapshot) => {

            snapshot.forEach((doc) => {
                const data = doc.data();
                switch (data.type) {
                    case 'recommend':
                        recommends.push({ id: doc.id, ...data });
                        break;

                    case 'new':
                        newDisneys.push({ id: doc.id, ...data });
                        break;

                    case 'original':
                        originals.push({ id: doc.id, ...data });
                        break;

                    case 'trending':
                        trending.push({ id: doc.id, ...data });
                        break;
                }
            });

            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
            );
        });
    }, [userName]);


    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container = styled.section`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("src/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

