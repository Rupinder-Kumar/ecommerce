import React from "react"
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { Switch, Route } from "react-router-dom"
import { auth } from "./firebase/firebase.utils"
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
   this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
 
}

export default App;
