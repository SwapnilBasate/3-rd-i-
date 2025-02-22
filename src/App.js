import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import toast from 'react-hot-toast';
import Dashboard from './Pages/Dashboard';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Appointment from './Pages/Appointmentb';
import Appointment1 from './Pages/Appointmentb';

function App() {
  const navigate = useNavigate();

  const onLoginClick = () => {
    if (localStorage.getItem('user') != null) {
      localStorage.removeItem('user');
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <div className='header'>
        <h2>3RdI</h2>
        <div className='links'>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/appointment'>Appointment</NavLink>

          <button className={localStorage.getItem('user') != null ? 'logout' : ''} onClick={onLoginClick}>
            {localStorage.getItem('user') != null ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
      <div className='box'>
        <h2>Smile Please</h2>
      </div>
      <Routes>
        <Route path='/home' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/appointment'Component={Appointment1} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFoundComp />} />
      </Routes>
    </>
  );
}

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user') != null) {
      navigate('/dashboard');
    }
  }, []);

  const userArray = [
    { username: 'Swapnil@mail.com', password: 'Pass@123', fullname: 'User1' }
  ];

  const onFormSubmit = (data) => {
    const user = userArray.find(user => user.username === data.username && user.password === data.pwd);
    
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      toast.success('Login Successful !!');
      navigate('/dashboard');
    } else {
      toast.error('Invalid username and password !!');
      reset();
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className='title'>
          <h2>Login</h2>
        </div>
        <div className='input-field'>
          <label>Username</label>
          <input type='email' {...register('username', { required: 'Username is required.', pattern: { value: /^\S+@\S+$/, message: 'Invalid username' } })} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div className='input-field'>
          <label>Password</label>
          <input type='password' {...register('pwd', { required: 'Password is required' })} />
          {errors.pwd && <p>{errors.pwd.message}</p>}
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

function NotFoundComp() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <div className='not-found-container'>
      <p>404 Page is not Found</p>
      <p>Click here to visit homepage</p>
      <button onClick={goToHome}>Home Page</button>
    </div>
  );
}

export default App;