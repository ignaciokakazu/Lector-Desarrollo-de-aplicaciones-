import Navigation from './components/navigation/Navigation'
import Principal from './components/principal/Principal';
import { Provider } from 'react-redux';
import store from './store/index'
import { init, selectFavorito } from './db';

init()
  .then(()=> console.log('Database initialized'))
  .catch((err)=>{
    console.log('Database error')
    console.log(err.message)
  })

selectFavorito()
  .then((result)=> console.log(result))
  .catch((err)=>console.log('fallo el select'))
  
export default function App() {
  return (
    // <Principal/>
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}


