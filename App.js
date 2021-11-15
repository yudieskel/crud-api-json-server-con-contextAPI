import { CrudProvider } from "./components/context/CrudContext";
import CrudApi from "./components/CrudApi";

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
      href="https://es.reactjs.org/docs/context.html"
      target="_blank"
      rel="noreferrer"
      >
      Documentación
      </a>
      <hr/>
      <CrudProvider>
      <CrudApi/>
      </CrudProvider>
    </div>
  );
}

export default App;
