import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

export default function GoToTop() {
    // style
    const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    .top-btn {
        font-size: 2.4rem;
        width: 6rem;
        height: 6rem;
        color: #fff;
        background-color: ${({ theme }) => theme.colors.btn};
        box-shadow: ${({ theme }) => theme.colors.shadow};
        border-radius:50%;
        position: fixed;
        bottom: 5rem;
        right:5rem;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &--icon {
            animation: gototop 1.2s linear infinite alternate-reverse;
        }

        @keyframes gototop {
        0 {
            transform: translateY(-0.5rem);
        }

        100% {
            transform: translateY(1rem);
        }
    }
}

@media (max-width:${({theme})=>theme.media.mobile}) {
    .top-btn {
       right: 0;
       left: 40%;
    }
 }
    `;


    // top btn
    const [isVisible, setisVisible] = useState(false);
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const listenToScroll = ()=> {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > heightToHidden){
            setisVisible(true);
        }
        else{
            setisVisible(false);
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);
    


    return (
        <Wrapper>
            {isVisible && (
            <div className='top-btn' onClick={goToBtn}>
                <FaArrowUp className='top-btn--icon' />
            </div>
            )}
        </Wrapper>
    )
}