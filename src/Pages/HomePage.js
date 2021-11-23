import React from 'react'
import { useEffect,useRef } from 'react'
import styled from 'styled-components';
import GithubIcon from '@material-ui/icons/GitHub';
import {init} from 'ityped'
import Particles from 'react-particles-js';
import ParticlesConfig from '../Components/particlesConfig'

function HomePage() {
    const text = React.useMemo(()=> ['Developer','Content Creator'],[]);
    const textRef = useRef()
    

    useEffect(() => {
        init(textRef.current,{
             cursorChar: "",
             backSpeed: 20,
             smartBackspace: false,
             shuffle: true,
             startDelay: 500,
             backDelay: 1000,
             loop: true,
             loopCount: Infinity,
             strings:text,})

    }, [text,])
    return (
        <HomePageStyled>    
            
            <Particles classname='particles' params={ParticlesConfig}><h1>PARTICLE!!!</h1></Particles>
            
            <div className="typography">
            
                <div className="intro">
                    <div className="wrapper">
                        <h2>Hey!...,I'm</h2>
                        <h1>Massoud Javadi</h1>
                        <h3>Frontend <span ref={textRef}></span></h3>

                    </div>
                </div>

                <div className="icons">
                    <a href="https://github.com/MassoudJavadi" className="icon i-github">
                        <GithubIcon />
                    </a>
                </div>


            </div>
        </HomePageStyled>
        
    )
}



const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .tsparticles-canvas-el{
        position: fixed;
        z-index: -999
    }
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;



        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }

    .intro {
        flex: 0.5;
        position: relative; // 'a' tag is absolute, so .right as it's parent, should be relative.

        .wrapper {
        width: 100%;
        height: 100%;
        padding-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @include mobile {
            padding-left: 0;
            align-items: center;
        }

        h1 {
            font-size: 60px;
            margin: 10px 0;

            @include mobile {
            font-size: 40px;
            }
        }
        h2 {
            font-size: 35px;
        }
        h3 {
            font-size: 30px;

            @include mobile {
            font-size: 20px;
            }

                span {
                font-size: inherit;
                color: crimson;
                }

                .ityped-cursor {
                animation: blink 1s infinite;
                }

                @keyframes blink {
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }
        }
        }

        }
    }
`;

export default HomePage;
