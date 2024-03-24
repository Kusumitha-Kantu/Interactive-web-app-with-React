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
import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import CoreConcept from './components/CoreConcept.js';
import TabButton from './components/TabButton.js';
import { useState } from "react";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  let tabContent = <p>Please select a topic.</p>;
  if(selectedTopic){
    tabContent = (
      <div id = "tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }
  return (
    <div>
        <Header />
        <main>
          <section id = "core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((conceptItem) => (
                <CoreConcept key = {conceptItem.title} {...conceptItem}/>
              ))}
            </ul>
          </section>
          <section id = "examples">
            <h2>Examples</h2>
              <menu>
                <TabButton 
                  isSelected = {selectedTopic==='components'}
                  onSelect = {()=>handleSelect("components")}>
                    Components
                </TabButton>
                <TabButton 
                  isSelected = {selectedTopic==="jsx"}
                  onSelect = {()=>handleSelect("jsx")}>
                    JSX
                </TabButton>
                <TabButton 
                  isSelected = {selectedTopic==="props"}
                  onSelect = {()=>handleSelect("props")}>
                    Props
                </TabButton>
                <TabButton 
                  isSelected = {selectedTopic==="state"}
                  onSelect = {()=>handleSelect("state")}>
                    State
                </TabButton>
              </menu>
              {tabContent}
          </section>
        </main>
      </div>
  );
}

export default App;

