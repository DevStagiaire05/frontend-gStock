import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';
import DashboardPage from './components/pages/Dashboard';
import ProductsPage from './components/pages/Products';
import StoresPage from './components/pages/Stores';
import StocksPage from './components/pages/Stocks';
import OperationsPage from './components/pages/Operations';
import MovementsPage from './components/pages/Movements';


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
