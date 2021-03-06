import React from 'react';
import '../stylesheets/App.scss';
import GifsList from './GifsList'
import { Switch, Link, Route } from 'wouter'


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <section className="App-content">
            <h1>¿Cómo te sientes hoy?</h1>
            <Link to='/gif/happy'>Happy</Link>
            <Link to='/gif/sad'>sad</Link>
            <Link to='/gif/dance'>dance</Link>

            <div>
              <h4>Escribe</h4>
            <input></input>
            </div>
          </section>
        </Route>
        <Route
          path='/gif/:keyWord'
          component={GifsList}
        />
      </Switch>
    </div>
  );
}

export default App;

// const GIFS = [
//   'https://media3.giphy.com/media/l46ChsgVfw08PbnZ6/giphy.gif'
// ]

// const GIFS2 = [
//   'https://media2.giphy.com/media/9rannlr3tRjxrQKzeZ/giphy.gif?cid=ecf05e4703789389e2c4678542e9b7ea8509031bf6d814af&rid=giphy.gif'
// ]

// function App() {
//   const [gifs, setGifs] = useState([GIFS])

//   useEffect(function() {

//   }, [])

//   return (
//     <div className="App">
//       <section className="App-content">
//         {gifs.map(singleGif => <img alt='gif' src={singleGif}/> )}

//         <button onClick={() => setGifs(GIFS2)}>Cambiar gif</button>

//       </section>
//     </div>
//   );
// }

// export default App;
