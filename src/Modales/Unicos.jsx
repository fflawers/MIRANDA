import React, {useEffect, useRef, useState} from "react";
import VanillaTilt from "vanilla-tilt";

const stepsData = [
    {
        img: "https://imagesspamiranda.s3.us-east-2.amazonaws.com/127455121078.jpg",
        alt: "Doble cobertura nacional",
        text: ["Tu oasis personal en medio del caos"],
    },
    {
        img: "https://imagesspamiranda.s3.us-east-2.amazonaws.com/127455121076.jpg",
        alt: "Auto-recarga",
        text: ["Relaja tu cuerpo, renueva tu alma"],
    },
    {
        img: "https://imagesspamiranda.s3.us-east-2.amazonaws.com/1.jpg",
        alt: "Conserva tu número",
        text: ["Cada detalle pensado para tu bienestar"],
    },
    {
        img: "https://imagesspamiranda.s3.us-east-2.amazonaws.com/12745512107.jpg",
        alt: "Atención personalizada",
        text: ["El lujo de cuidarte, sin prisa"],
    },
    {
        img: "https://imagesspamiranda.s3.us-east-2.amazonaws.com/0.jpg",
        alt: "Garantía de satisfacción",
        text: ["Donde el tiempo se detiene para ti"],
    },
    {
        img: "https://imagesspamiranda.s3.us-east-2.amazonaws.com/127455121079.jpg",
        alt: "Sin plazos forzosos",
        text: ["Belleza y paz en perfecta armonía"],
    },
];

const Unicos = () => {
    const tiltRefs = useRef([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 992);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        if (isMobile) return;
        const els = tiltRefs.current.filter(Boolean);
        els.forEach(el => VanillaTilt.init(el, {
            max: 30,
            speed: 400,
            reverse: true
        }));
        return () => els.forEach(el => el.vanillaTilt?.destroy());
    }, [isMobile]);

    const addToRefs = el => {
        if (el && !tiltRefs.current.includes(el)) {
            tiltRefs.current.push(el);
        }
    };

    return(
        <div className="container squareBlackU p-0 mt-4">
            <div className="row justify-content-center text-center backgroundUnicos m-0 py-2">
                {stepsData.map((step, i) => (
                    <div
                        className="py-4 px-0 m-0 col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4"
                        key={step.alt + i}
                    >
                        <div
                            ref={addToRefs}
                            className="d-flex flex-column align-items-center justify-content-center"
                            aria-label={step.alt}
                        >
                            <img
                                loading="lazy"
                                src={step.img}
                                alt={step.alt}
                                style={{ width: "50%" }}
                            />
                            <div className="py-2 m-0 d-flex align-items-center flex-column justify-content-center" style={{ minHeight: 75 }}>
                                {step.text.map((line, j) => (
                                    <p key={j} className="m-0 p-0">{line}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Unicos;