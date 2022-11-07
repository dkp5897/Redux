
import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamsContainer from './Components/IceCreamsContainer';
import HooksTofyContaner from './Components/HooksTofyContaner';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';

function App() {
  // React Redux includes a <Provider /> component, which makes the Redux store available to the rest of your app:
  return (
   <Provider store={store}>
     <div className="App">
     <ItemContainer cake />
     <ItemContainer />
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamsContainer/>
      <HooksTofyContaner/>
      <NewCakeContainer/>
    </div>
   </Provider>
  );
}

export default App;
