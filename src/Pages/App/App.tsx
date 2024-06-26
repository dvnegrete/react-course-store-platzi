import { useRoutes, BrowserRouter } from 'react-router-dom';

import './App.css';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SingIn';
import { NavBar } from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';

const AppRoutes = ()=> {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/*', element: <NotFound/> },
    { path: '/sign-in', element: <SignIn/> },
  ]);

  return routes;
}

const App = ()=> {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar/>
        <AppRoutes/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
