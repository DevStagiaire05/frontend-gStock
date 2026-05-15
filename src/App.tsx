import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {AppLayout} from './components/layouts/AppLayout';
import {DashboardPage} from './pages/DashboardPage';
import { ProductsPage } from './pages/ProductsPage';
import { StoresPage } from './pages/StoresPage';
import { StocksPage } from './pages/StocksPage';
import { OperationsPage } from './pages/OperationsPage';
import { MovementsPage } from './pages/MovementsPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    children:[
      {index:true, element:<DashboardPage/>},
      {path:'products', element:<ProductsPage/>},
      {path:'stores',element:<StoresPage/>},
      {path:'stocks',element:<StocksPage/>},
      {path:'operations',element:<OperationsPage/>},
      {path:'movements',element:<MovementsPage/>}
    ],
  },
]);

function App() {
 
  return <RouterProvider router={router}/>;
}

export default App
