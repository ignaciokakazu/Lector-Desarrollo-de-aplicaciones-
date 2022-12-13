import Navigation from './components/navigation/Navigation'
import Principal from './components/principal/Principal';
import { Provider } from 'react-redux';
import store from './store/index'

export default function App() {
  return (
    // <Principal/>
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}


