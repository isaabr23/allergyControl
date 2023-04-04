import { Button, Checkbox, TextField } from '@mui/material'
import React from 'react';

import PanToolIcon from '@mui/icons-material/PanTool';
import ApiTwoToneIcon from '@mui/icons-material/ApiTwoTone';
import { NavLink } from 'react-router-dom';

export const Login = () => {

  return (
    <div className="loginPage">

      <div className="loginWelcome">

        <div className='flex'>
          <ApiTwoToneIcon sx={{ color: '#2d2deb', fontSize: 50, marginTop: 1.8 }}/>
          <h2>allergyControl</h2>
        </div>

        <div className="contenedorImg">
          <div className="fondoLogin"></div>
        </div>
        
      </div>

      <div className='css-pcmzd5 centrar loginForm'>
        <h1>Bienvenido a allergyControl ! <PanToolIcon /></h1>
        <h3>Please sign-in to your account and start the adventure</h3>
        <TextField 
          id="outlined-basic"
          label="Email"
          variant="outlined"
          placeholder='example@example.com'
          margin="normal"
          required={true}
          color="blanco"
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder='******'
          margin="normal"
          color="blanco"
          required={true}
        />

        <div className='checkForgot'>
          <div className='flex'>
            <Checkbox color="blanco"/>
            <p className='loginP'>Recuerdame</p>
          </div>

          <div>
            <NavLink to="/RecuperarPassword" className="nav-link"> 
              <p className='loginP'>Olvidaste el password?</p>
             </NavLink>
          </div>

        </div>

        <Button variant="contained" color="boton" sx={{ marginTop: 2, ':hover': { bgcolor: '#fff', color: '#000'}}} >
          Login
        </Button>

        <div className='registroLogin'>
          <NavLink to="/Registro" className="nav-link"> 
            <p className='loginP'>Aún No tienes cuenta ? </p>
          </NavLink>
        </div>

      </div>
    </div>
  )
}
