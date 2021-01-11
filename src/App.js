import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import { Login } from './pages/Login';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Todo } from './pages/Todo';
import { Detail } from './pages/Detail';
import { TestPage } from './pages/TestPage';
import './App.css';

// 修正1: コンストラクタを作りたいので、関数コンポーネントからクラスに修正
class App extends React.Component {
//function App() {

  // 修正2: コンストラクタを追加
  constructor(props){
    super(props);
    this.state = {};
    // バックエンドのAPIを呼び出し、this.state.nameに結果を保管.
    // 呼び出し先はローカルとサーバ上で可変にしたいので環境変数からとる
    // fetch(process.env.REACT_APP_BACKEND_URL + "api/user")
    // .then(response => response.json())
    // .then(json =>  this.setState({name : json.name}));
  }

// 修正3: renderメソッドにする
  render(){
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/test" component={TestPage} />
            <Route>
              <Header />
              <Switch>
                {/* <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} /> */}
                <Route exact path="/todo" component={Todo} />
                <Route exact path="/detail" component={Detail} />
                {/* <Route component={Page404} /> */}
              </Switch>
            </Route>
          </Switch>
        </BrowserRouter>
        {/* <Home /> */}
      </>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       test
      //     </p>
      //     <p>
      //       Hi, {this.state.name}. Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //     Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
