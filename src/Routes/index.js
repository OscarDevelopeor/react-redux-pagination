import Clients from '../Components/Clients/Clients';
import Inventory from '../Components/Inventory/Inventory';
const Routes = [
    {
        path: "/",
        name:"Clients",
        sidenavName: "Clients",
        /* navbarName: "Clients", */
        icon: "face",
        component: Clients
      },
      {
        path: "/inventory",
        name:"Route 2",
        sidenavName: "Inventario",
        icon: "line_weight",
        component: Inventory
      }
]
export default Routes;
