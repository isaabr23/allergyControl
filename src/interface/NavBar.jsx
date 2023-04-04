// import logo from "../img/logo.jpg"
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {

    let activeStyle = {
        color: 'white'
    };

    let desactiveStyle = {
        color: '#bbd4ce'
    };

    return (
        <nav className="navbar">

            <div className="link">
                
                <NavLink className="navbar-name" to="/" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }> 
                    Inicio
                </NavLink>

                <NavLink className="navbar-name" to="/Nosotros" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }> 
                    Nosotros
                </NavLink>

                <NavLink className="navbar-name" to="/Login" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }>
                    Login
                </NavLink>

                <NavLink className="navbar-name" to="/Registro" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }>
                    Registro
                </NavLink>

                <NavLink className="navbar-name" to="/Contacto" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }>
                    Contacto
                </NavLink>

            </div>
                   
        </nav>
  )
}