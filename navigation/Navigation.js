import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from '../components/ProductList/ProductList';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Cart from '../components/Cart/Cart';
import { useImageStore } from "../store/ImageStore";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import FirstSreenNavigator from "./Stack"
import Pay from '../components/Pay/Pay';


export default function Navigation() {
  
  const { cart, setCart } = useImageStore();
  
  const Tab = createBottomTabNavigator();
  

  const cartQuantityCalculator = () => {

    let cartQuantity = 0;

    cart.map((item)=>{

      cartQuantity += item.Quantity;

    });

    return cartQuantity;
  }

  return (
    <Tab.Navigator>
      
      <Tab.Screen 
        name="Produits" 
        component={ProductList}
        options={{
          tabBarLabel: "Home" ,
          // couleur du header
          headerStyle: {
            backgroundColor:'#D0D1BF', // Specify the height of your custom header
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />


      <Tab.Screen 
        name="Panier" 
        component={FirstSreenNavigator} // ne pointe plus vers vers composant Cart mais vers stack navigator composant (qui contient cart)
        options={{
          tabBarLabel: "Home" ,
          // couleur du header
          headerStyle: {
            backgroundColor:'#D0D1BF', // Specify the height of your custom header
          },
          tabBarLabel: cartQuantityCalculator() + ' articles' ,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}