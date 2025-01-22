import React, { useEffect, useState } from 'react';
import '../../styles/intro-animation.css';

const IntroAnimation = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowText(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`intro-container ${showText ? 'start-animation' : ''}`}>
            <h1>Star Wars</h1>
            <p>In a galaxy far, far away...</p>
            <p>
                The Star Wars story spans an epic struggle between good and evil, in a galaxy filled with heroes, villains, and powerful mystical forces known as the Force. Throughout the saga, the Jedi and Sith, descendants of ancient civilizations, seek control of the galaxy, while key characters fight for freedom and justice.
            </p>
            <div className="d-flex justify-content-center flex-column mt-5  w-100">
                <h2>¡Welcome to the Star Wars galaxy!</h2>
                <p>Explore characters, planets, vehicles and more...</p>
            </div>

        </div>
    );
};

export default IntroAnimation;