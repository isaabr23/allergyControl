import { Navigate, Route, Routes } from "react-router-dom";
//import { Footer } from "../interface/Footer";
//import { Navbar } from "../interface/NavBar";
import { Contacto } from "../pages/Contacto";
import { Index } from "../pages/Index";
import { Login } from "../pages/Login";
import { Nosotros } from "../pages/Nosotros";
import { RecuperarPassword } from "../pages/RecuperarPassword";
import { Registro } from "../pages/Registro";

// import { useSelector } from 'react-redux';
// import { Administradores } from "../admin/pages/Administradores";
// import { Stock } from "../admin/pages/Stock";
// import { Clientes } from "../admin/pages/Clientes";

export const AppRouter = () => {

//   const { status } = useSelector( state => state.auth)

//   if( status === 'checking' ) {
//     return (
//       <h3>Cargando...</h3>
//     )
//   }

  return (
    <>
    
      {/* <Navbar /> */}

      <Routes>

      {/* {
        ( status === 'not-authenticated' )
          ? (
              <> */}
                <Route path="/" element={<Index />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/Registro" element={<Registro />} />
                <Route path="/Nosotros" element={<Nosotros />} />
                <Route path="/RecuperarPassword" element={<RecuperarPassword />} />
                <Route path="/*" element={ <Navigate to="/" /> } />
              {/* </>
            )
          : 
            (
              <>
                <Route path="/" element={ <Admin /> } />
                <Route path="/admin" element={ <Administradores /> } />
                <Route path="/producto" element={ <Stock /> } />
                <Route path="/contacto" element={ <Clientes /> } />
                <Route path="/*" element={ <Navigate to="/" /> } />
              </>
            )
          
      }         */}
      </Routes>

      {/* <Footer /> */}
    </>
  )
}
