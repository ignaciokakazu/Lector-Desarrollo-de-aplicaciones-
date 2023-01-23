import Navigation from './components/navigation/Navigation'
import { Provider, useDispatch } from 'react-redux';
import store from './store/index'
import { postDataToFirebase } from './db/FirebaseQuerys';
import { getDataFromFirebase } from './db/FirebaseQuerys';

// const init = async () => {
//   const result = await postDataToFirebase('books', [{
//     id: 0,
//     titulo: 'Moby Dick',
//     autor: 'Herman Melville',
//     fecha: 2023,
//     src: 'https://s3.amazonaws.com/moby-dick/OPS/package.opf'
//   }, {
//     id: 1,
//     titulo: 'THE ART OF THE START',
//     autor: 'GUY KAWASAKI',
//     fecha: 2004,
//     src: 'https://drive.google.com/file/d/1mA2hnoqUgrK5p7zkDPEXQdAWA5cQ7fsj/view?usp=sharing'
//   },{
//     id: 2,
//     titulo: 'FOUNDERS AT WORK',
//     autor: 'JESSICA LIVINGSTON',
//     fecha: 2007,
//     src: 'https://drive.google.com/file/d/19CYxrpnD42NDd8EJ6k0qJOeQLgQWFykL/view?usp=share_link'
//   },{
//     id: 3,
//     titulo: 'AUTOMATE THE BORING STUFF WITH PYTHON',
//     autor: 'Al Sweigart',
//     fecha: 2019,
//     src: 'https://drive.google.com/file/d/1MFU7CpMRLJfK22T2zcz_bV3aGG84yKPL/view?usp=share_link'
//   },{
//     id: 3,
//     titulo: 'RICH BLOOD',
//     autor: 'Robert Bailey',
//     fecha: 2022,
//     src: 'https://drive.google.com/file/d/1MFU7CpMRLJfK22T2zcz_bV3aGG84yKPL/view?usp=sharing'
//   }
// ])
// }

// const init = async () => {
//   const libros = await getDataFromFirebase('books')
//   console.log(libros)
// }

// const libros = [{
//       titulo: 'Moby Dick',
//       autor: 'Herman Melville',
//       fecha: 2023,
//       src: 'https://s3.amazonaws.com/moby-dick/OPS/package.opf'
//     }, {
//       titulo: 'THE ART OF THE START',
//       autor: 'GUY KAWASAKI',
//       fecha: 2004,
//       src: 'https://drive.google.com/file/d/1mA2hnoqUgrK5p7zkDPEXQdAWA5cQ7fsj/view?usp=sharing'
//     },{
//       titulo: 'FOUNDERS AT WORK',
//       autor: 'JESSICA LIVINGSTON',
//       fecha: 2007,
//       src: 'https://drive.google.com/file/d/19CYxrpnD42NDd8EJ6k0qJOeQLgQWFykL/view?usp=share_link'
//     },{
//       titulo: 'AUTOMATE THE BORING STUFF WITH PYTHON',
//       autor: 'Al Sweigart',
//       fecha: 2019,
//       src: 'https://drive.google.com/file/d/1MFU7CpMRLJfK22T2zcz_bV3aGG84yKPL/view?usp=share_link'
//     },{
//       titulo: 'RICH BLOOD',
//       autor: 'Robert Bailey',
//       fecha: 2022,
//       src: 'https://drive.google.com/file/d/1MFU7CpMRLJfK22T2zcz_bV3aGG84yKPL/view?usp=sharing'
//     }
//   ]

// const init = async () => {
//   for (let i=0;i<libros.length;i++) {
//     await postDataToFirebase('books', libros[i])
//   }
// }


// init()
//   .then(()=>console.log('iniciado'))

console.clear()
console.warn('iniciado')

export default function App() {  

  return (
    // <Principal/>
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}


