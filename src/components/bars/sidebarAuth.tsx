import React from "react";
import style from './sidebar.module.css';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../store/slices/userSlice";
import { persistor } from "../../store/store";

const SideBarAuth: React.FC<any> = ({ onSideBar, toggleSideBar}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleLogout = () => {
        navigate('/', { replace: true });
       dispatch(logOutUser({}));
       persistor.flush()
        localStorage.clear()
    }
    const links = [
        { title: 'Go-pro', path: '' },
        { title: 'Explore', path: '' },
    ]
    return (
        <div className={onSideBar ? `w-100 bg-primary flex-column ${style.onSidebar}` : `${style.offSidebar}`}
        >
            <div className="w-100 py-3 text-light  text-end px-3 fs-4">
                <i className="bi bi-x-circle" role="button" onClick={() => toggleSideBar()}></i>
            </div>
            <ul className="d-flex flex-column align-items-center m-0 p-0 w-100 gap-2">
                {
                    links.map((nav,index) => (
                        <li key={index} className="list-group-item text-center py-2 fw-medium text-light" role="button">{nav.title}</li>

                    ))

                }
                <Button onClick={handleLogout} variant="outline border border-light text-light">Logout</Button>
                
            </ul>


        </div>
    )

}
export default SideBarAuth;