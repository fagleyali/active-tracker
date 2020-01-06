import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import './App.css';
// import menu from './Component/Menu/menu';
import Header from './Component/Layout/Header/Header';
import Footer from './Component/Layout/Footer/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Signup from './Pages/Signup/Signup';
import Patients from './Component/Patient/patientInfo';
import PatientDetails from './Component/Patient/patientDetails';

function App() {

  return (
    <Container component="main" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} disableGutters >
     
      <CssBaseline />
      <Header />
      
      <Switch>
        <Route exact path='/' component={Login}>
        <Typography component={Login} />
        </Route>
        <Route exact path='/signup' component={Signup}>
        <Typography component={Signup} />
        </Route>
        <Route exact path='/patients' component={Patients}>
        <Typography component={Patients}  />
        </Route>
        <Route exact path='/patientdetails/:id' component={PatientDetails}>
        <Typography component={PatientDetails}  />
        </Route>
      </Switch>
        
      
      
      <Footer />
      
      </Container>
  );
}

export default App;
