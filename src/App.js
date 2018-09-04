import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Clock from './components/Clock';
import Toggle from "./components/Toggle";
import LoginControl from "./components/LoginControl";
import Page from "./components/Page";
import Number from "./components/Number";
import ExampleForm from "./components/Form";
import Calculator from "./components/CalculatorTemp/Calculator";
import SignUpDialog from "./components/SignUpDialog/SignUpDialog";

class App extends Component {

  render() {
    return (
      <div>
        {/*<Clock/>*/}
        {/*<Toggle/>*/}
        {/*<LoginControl/>*/}
        {/*<Page/>*/}
        {/*<Number/>*/}
        {/*<ExampleForm/>*/}
        {/*<Calculator/>*/}
        <SignUpDialog/>
      </div>
    );
  }
}

export default App;
