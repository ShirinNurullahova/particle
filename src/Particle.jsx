import React, { useEffect, useState, useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import gsap from 'gsap';

function Particle() {

    
    const particlesInit = async (main) => {
        await loadFull(main)

    }
    const particlesLoaded = (container) => {
        // console.log(container)
    }
   
    useEffect(() => {
        var hhh = document.querySelector("canvas")
  
            gsap.set(hhh, { position: 'relative !important' })
     
     
        }
        
    )
    return (
        <Particles
            id='tsparticles hello'
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {

                    "fullScreen": {
                        "enable": false,
                        "zIndex": -700,
                        "position": 'relative'
                    },
                    "canvas":{
                        "position": "relative"
                    },
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": true,
                                "value_area": 400
                            }
                        },
                        "color": {
                            "value": "#FFD700"
                        },
                        "shape": {
                            "type": "circle"
                        },
                        "opacity": {
                            "value": 1,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 10,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 4,
                                "size_min": 0.3,

                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": false,
                            "speed": 3,
                            "direction": "none",
                          

                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 600
                            }
                        }
                    },
                    "interactivity": {
                     
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 250,
                                "size": 0,
                                "duration": 2,
                                "opacity": 0,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 50,
                                "duration": 0.1
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "background": {

                        "image": "url('./assets/images/body_background.png')",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "100%",
                     
                        
                    }
                }
            }
        />
    )
}
export default Particle