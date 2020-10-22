import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx"
import Header from "./components/header/header.component.jsx"
//import { auth } from "firebase";
import { auth } from "./firebase/firebase.utils"





class App extends React.Component {  
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser : null
    }
  }
unsubscribeFromAuth = null;
 componentDidMount(){
     this.unsubscribeFromAuth =  auth.onAuthStateChanged( (user) => {
     this.setState({currentUser : user})
     console.log(user);
   })
   
 }




  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
    }
}

export default App;
