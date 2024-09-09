import React, { useEffect, useRef, useCallback } from 'react';
import './StarDrop.css';

const StarDrop = () => {
    const starRef = useRef(null);

    const getRandomPosition = () => {
        return Math.floor(Math.random() * window.innerWidth);
    };

    const animateStar = useCallback(() => {
        if (starRef.current) {
            starRef.current.style.left = `${getRandomPosition()}px`;
            starRef.current.style.animation = 'none';
            requestAnimationFrame(() => {
                starRef.current.style.animation = '';
            });
        }
    }, [getRandomPosition]);

    useEffect(() => {
        const starElement = starRef.current;
        starElement.addEventListener('animationend', animateStar);
        animateStar(); // Initial animation

        return () => {
            starElement.removeEventListener('animationend', animateStar);
        };
    }, [animateStar]);

    return <div className="star" ref={starRef}></div>;
};

export default StarDrop;

