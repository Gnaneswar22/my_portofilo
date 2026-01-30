import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveCursor = (e) => {
            // Use pageY and pageX to account for scroll
            cursor.style.top = e.pageY + "px";
            cursor.style.left = e.pageX + "px";
        };

        const handleMouseOver = (e) => {
            const link = e.target.closest('a');
            const btn = e.target.closest('button');
            const toggle = e.target.closest('.toggle');

            if (link || btn || toggle) {
                cursor.classList.add("link-grow");
            } else {
                cursor.classList.remove("link-grow");
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return <div className="cursor-effect" ref={cursorRef}></div>;
};

export default Cursor;
