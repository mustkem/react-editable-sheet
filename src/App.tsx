
import Sheet from './components/Sheet';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const tasks = [
  "Markup Completed",
  "Initial model data integration Completed",
  "Create editable cell Completed",
  "Make cell controlled - Completed",
  "Update data in parent - Completed",
  "Add debouncing in progress - Save data few moments after user stopped typing - Completed",
  "Persist to local storage - Completed",
  "Check feasibility for third party package for contentEditable - In Progress",
  "Add row on right click",
  "Add column on right click",
]

function App() {
  return (
    <div className="App">
      <div className="app-container-fluid">
        <div>
          Todos
          <ul>
            {
              tasks.map(item => {
                return (
                  <li key={item}>{item}</li>
                )
              })
            }
          </ul>
          <div>
            <pre>

            </pre>
          </div>
        </div>
        <Sheet />

      </div>
    </div>
  );
}

export default App;
