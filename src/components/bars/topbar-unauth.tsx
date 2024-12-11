import React from "react";
import { Button, Image } from "react-bootstrap";
import './topbar-unauth.css';
import logo from '../../assets/svgs/logo-wok9ja.svg'
// import { fundingURL } from "../../app/config";
import { useNavigate } from "react-router-dom";

const TopBarUnAuth: React.FC<any> = ({ loginClicked, togSide, signUpClicked }) => {
    const navigate = useNavigate();

    const links = [
        { title: 'Go-pro', path: '' },
        { title: 'Market-place', path: '/' }
    ]
    return (
        <div className={`contain shadow-sm bg-primary d-flex m-0 px-3  navbar sticky-top  text-light align-items-center justify-content-between w-100`}
            style={{ minHeight: '70px' }}>
            <Image className="logo" role="button" src={logo} onClick={() => navigate('/')} />
            <ul className="gap-5 m-0 p-0 top-nav align-items-center">
                {
                    links.map((link, index) => (
                        <li key={index} className="list-group-item fw-medium" role="button">{link.title}</li>
                    ))

                }
                <li onClick={loginClicked} className="list-group-item fw-medium" role="button">Sign in</li>

                <li onClick={signUpClicked} className="list-group-item fw-medium" role="button">
                <Button className=" bg-secondary px-3 fw-bold text-light" onClick={signUpClicked}>Join</Button>
                </li>


                <li onClick={signUpClicked} className="list-group-item fw-medium d-flex align-items-center gap-2" role="button">
                
                Support us
                <i className="bi bi-clipboard2-heart" style={{fontSize:'1.2em'}}></i>
                </li>
            </ul>
            <div className="meni align-items-center gap-2" role="button">
                Support us
                <i className="bi bi-clipboard2-heart text-secondary" style={{fontSize:'1.2em'}}></i>
                {/* <i className="bi bi-currency-dollar"></i> */}
            {/* <i onClick={togSide} className="bi bi-list fs-1" ></i> */}

            </div>
        </div>
    )

}
export default TopBarUnAuth;