import {BrowserRouter, Switch, Route} from "react-router-dom"
import Component1 from '../src/Components/Component1/Component1'
import Component2 from '../src/Components/Component2/Component2'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/1" component={Component1}/>
        <Route path="/2" component={Component2}/>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
