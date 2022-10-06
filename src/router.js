import Feed from './pages/Feed';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
import Perfil from './pages/Perfil';
import PaginaPadrao from 'components/PaginaPadrao';
import Login from 'pages/Login';
import Cadastro from 'pages/Cadastro';
import { UserContextProvider } from 'contexts/UserContext';
import EditarPost from 'pages/AtualizaFeed';
import { Component } from 'react';

import SignUpForm from './aws/CognitoReactSignUpForm'
import SignInForm from './aws/CognitoReactSignInForm';

import Amplify from 'aws-amplify';
import amplify_config from './amplify-config';
Amplify.configure(amplify_config);




class App extends Component {
    state = {
    signUpIsActive: false
    };

    constructor(props) {
    super(props);

    this.toggleActivePage = this.toggleActivePage.bind(this);
    }

    toggleActivePage() {
    this.setState({ signUpIsActive: !this.state.signUpIsActive });
    }

    render() {
    return (
        <div className="App">
        <h1>My React Cognito App</h1>
        <button className="btn btn-light btn-toggle" onClick={this.toggleActivePage}>
            { this.state.signUpIsActive ? "Ir para login" : "Ir para registro" }
        </button>
        { this.state.signUpIsActive ? <SignUpForm /> : <SignInForm /> }
        </div>
    );
    }
    
}
    

export default App



  