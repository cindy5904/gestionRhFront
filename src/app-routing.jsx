import { createBrowserRouter } from "react-router-dom";
import Home from './Views/Home'
import AddEmployes from './Component/employes/AddEmploye'
import ListEmploye from "./Component/employes/ListEmploye";
import DetailEmploye from './Component/employes/DetailEmploye'
import EditEmploye from './Component/employes/EditEmploye'


const router = createBrowserRouter([
    {
        path :"/",
        element : <Home />
    },
            
    {
        path:"/addEmploye",
        element : <AddEmployes />
    },
    {
        path:"/employes",
        element: <ListEmploye/>
    },
    {
        path: "/employes/:id",
        element: <DetailEmploye/>
    },
    {
        path: "/employes/:id/edit",
        element: <EditEmploye/>
    }
        
    
    
])

export default router