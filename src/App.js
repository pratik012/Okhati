import { useState } from 'react'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Footer from './components/Footer';
import 'fontsource-roboto';

import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

function App() {

  const adminUser = {
    email: 'admin@gmail.com',
    password: 'admin'
  };
  
  const [user, setUser] = useState({ name:"", email:"" });
  const [error, setError] = useState("");

  // login function is called when we attempt to Login
  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } 
    else {
      console.log("Details do not match.");
      setError("Details do not match.");
    }
  };

  const Logout = () => {
    setUser({ name:"", email:"" });
  };

  return (
    <BrowserRouter>
      <div className="App">
        
        {(user.email !== '') ? (
          <Box>
            <Button onClick={Logout}>Logout</Button>
          </Box>
        ) : (
          <div>
            <header>
              <Navbar />
              <Route exact path='/' component={Home} />
              <Route path='/signup' component={Signup} />
              <Route path='/signin' component={Signin} Login={Login} error={error}/>
            </header>

            <footer>
              <Footer />
            </footer>

          </div>
        )}

      </div>
    </BrowserRouter>
  );
}

export default App;
