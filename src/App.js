// import logo from './assets/react-core-concepts.png';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} alt="logo" className='App-logo'/>
//         <h> React Essentials</h>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import Header from "./components/Header";
import {CORE_CONCEPTS} from './data.js';
import CoreConcept from './components/CoreConcept.js';
function App() {
  return (
    <div>
        <Header />
        <main>
          <section id = "core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              <CoreConcept 
                image = {CORE_CONCEPTS[0].image}
                title = {CORE_CONCEPTS[0].title}
                description = {CORE_CONCEPTS[0].description}/>
              <CoreConcept {...CORE_CONCEPTS[1]}/>
              <CoreConcept {...CORE_CONCEPTS[2]}/>
              <CoreConcept {...CORE_CONCEPTS[3]}/>
            </ul>
          </section>
        </main>
      </div>
  );
}

export default App;

