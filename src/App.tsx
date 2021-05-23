
import Sheet from './components/Sheet';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const tasks = [
  "Markup Completed",
  "Initial model data integration Completed",
  "Create editable cell Completed",
  "Make cell controlled - In progress",
  "Persist to local storage",
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
                  <li>{item}</li>
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
