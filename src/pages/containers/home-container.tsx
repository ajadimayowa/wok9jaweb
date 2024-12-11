import { Outlet } from "react-router-dom"
import Footer from "../../components/bars/footer"
import TopBarUnAuth from "../../components/bars/topbar-unauth"
import { useState } from "react";
import SignupModal from "../../components/modals/signupmodal";
import LoginModal from "../../components/modals/loginmodal";
import FooterMenu from "../../components/bars/footer-menu";

const HomeContainer = () => {
    const [regModal, setRegModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [onSideNav, setOnSideNav] = useState(false);
    return (
        <div className="w-100 p-0 m-0 min-vh-100 d-flex flex-column justify-content-between" style={{ overflow: 'hidden', height: '100vh', backgroundColor:'#F5F5F5' }}>
            <TopBarUnAuth
                loginClicked={() => setLoginModal(true)}
                signUpClicked={() => setRegModal(true)}
                togSide={() => setOnSideNav(!onSideNav)}
            />
            <div style={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>{<Outlet />}</div>
            <FooterMenu/>
            <SignupModal on={regModal} off={() => setRegModal(false)} onLogin={() => setLoginModal(true)} />
            <LoginModal on={loginModal} off={() => setLoginModal(false)} />
        </div>
    )
}
export default HomeContainer;