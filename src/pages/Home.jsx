import React, { useEffect } from 'react';
import { gsap, Expo, Power2 } from 'gsap';
import Intro from '../components/Intro';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

const Home = () => {

    const handleExplore = () => {
        // fadeOut logic
        const tl = gsap.timeline();

        // .intro-btn opacity 0, y -100
        gsap.to(".intro-btn", { duration: 1, opacity: 0, y: -100 });

        // .text y -100%
        gsap.to(".text", { duration: 1, y: "-100%" });

        // .slider y -100%, delay 1
        gsap.to(".slider", { duration: 2, y: "-100%", delay: 1, ease: Expo.easeInOut });

        // .slider-2 y -100%, delay 1.4
        gsap.to(".slider-2", { duration: 2, y: "-100%", delay: 1.4, ease: Power2.easeInOut });

        // .intro y -100%, delay 2
        gsap.to(".intro", { duration: 2, y: "-100%", delay: 2, ease: Power2.easeInOut });

        // .content y 0, delay ? (The original had this, maybe to ensure it aligns or if it was shifted)
        gsap.to(".content", { duration: 2, y: 0, ease: Power2.easeInOut });

        // Animate Header elements after content appears
        const tlContent = gsap.timeline({ delay: 3 });
        tlContent.fromTo(".landing-text h1", { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 0.5 });
        tlContent.fromTo(".landing-text p", { opacity: 0 }, { opacity: 1, duration: 1 });

        tlContent.fromTo(".effect-1", { opacity: 0 }, { opacity: 1, duration: 1 }, "<");
        tlContent.fromTo(".effect-2", { opacity: 0 }, { opacity: 1, duration: 1 }, "<");
        tlContent.fromTo(".effect-3", { opacity: 0 }, { opacity: 1, duration: 1 }, "<");
        tlContent.fromTo(".effect-4", { opacity: 0 }, { opacity: 1, duration: 1 }, "<");
        tlContent.fromTo(".inner", { opacity: 0 }, { opacity: 1, duration: 0.3 }, "-=1");
    }

    const animateIntro = () => {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.to(".text", { y: "0%", duration: 1, stagger: 0.4 });
    };

    useEffect(() => {
        animateIntro();
    }, []);

    return (
        <>
            <Cursor />
            <Intro onExplore={handleExplore} />
            <div className="slider"></div>
            <div className="slider-2"></div>

            <div className="content">
                <Header />
                <main>
                    <About />
                    <Services />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
};
export default Home;
