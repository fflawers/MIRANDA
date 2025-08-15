import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="container-fluid">
                <h1 className="text-center">Renueva tu ser, vive la elegancia del descanso</h1>
                <div className="">
                    <img className="d-flex mx-auto img-fluid img-spa1"
                        src="https://plus.unsplash.com/premium_photo-1679430672295-3846f0cf0503?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                </div>
                <div className="text-center">
                    <h4>El primer spa de lujo diseñado para transformar tu bienestar en una experiencia sensorial.</h4>
                </div>

                <div className="text-center">
                    <p className="text-p">Reserva tu experiencia premium</p>
                    <button className="button-reserva" onClick={() => navigate("/servicios")}>
                        RESERVACIONES
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
