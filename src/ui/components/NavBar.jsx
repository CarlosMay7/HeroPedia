import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {

    const navigate = useNavigate();
    const {user, logout} = useContext(AuthContext);

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-wikipedia" width="44" height="44" viewBox="0 0 24 24" stroke="#6f32be" fill="none">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 4.984h2" />
                <path d="M8 4.984h2.5" />
                <path d="M14.5 4.984h2.5" />
                <path d="M22 4.984h-2" />
                <path d="M4 4.984l5.455 14.516l6.545 -14.516" />
                <path d="M9 4.984l6 14.516l6 -14.516" />
                </svg>       
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={(isActive) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={(isActive) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={(isActive) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav*item nav-link text-info'>
                        {user?.name}
                    </span>

                    <button className='nav-item nav-link btn' onClick={onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}