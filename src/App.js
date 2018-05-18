import React, { PureComponent } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';

class App extends PureComponent {
  state = {
      loading: false
  }

  componentDidMount() {
      this.setState({loading: true});
      setTimeout(() => {this.setState({loading: false})}, 5000);
  }

    render() {
        const {loading} = this.state;

    if (loading) {
        return (
            <div className="loader"><img src={require("./img/loader.gif")} alt=""/></div>
        )
    }

    return (
      <div className="App">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
