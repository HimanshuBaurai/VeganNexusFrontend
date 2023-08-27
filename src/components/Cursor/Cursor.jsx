import React, { useEffect } from 'react'; // Import useEffect
import './Cursor.scss';

const Cursor = () => {
    useEffect(() => {
        // Get references to cursor elements
        const crsr = document.querySelector('#cursor');
        const crsrB = document.querySelector('#cursor-blur');
        const h4All = document.querySelectorAll('#nav h4'); 

        h4All.forEach((e) => {
            e.addEventListener('mouseenter', ()=>{
                crsr.style.scale=2;
                crsr.style.border='0.5px solid white';
                crsr.style.backgroundColor='transparent'
            });
        })
        h4All.forEach((e) => {
            e.addEventListener('mouseleave', ()=>{
                crsr.style.scale=1;
                crsr.style.border='none';
                crsr.style.backgroundColor='#F86F03';
            });
        })

        // Mousemove event listener
        const handleMouseMove = (event) => {
            // Update cursor positions
            crsr.style.left = event.clientX + 'px';
            crsr.style.top = event.clientY + 'px';

            crsrB.style.left = event.clientX - 100 + 'px';
            crsrB.style.top = event.clientY - 100 + 'px';
        };

        // Add the event listener on component mount
        document.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove); 
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            <div id='cursor'></div>
            <div id='cursor-blur'></div>
        </div>
    );
}

export default Cursor;
