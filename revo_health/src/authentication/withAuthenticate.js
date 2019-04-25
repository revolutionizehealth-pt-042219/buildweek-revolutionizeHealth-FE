import React, { Component } from "react";

const withAuthenticate = App => LoginPage =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    // Checks if user is logged in based on LocalStorage and sets it's state.
    // This is applied in the Login.js file
    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    /*
      If logged in, you'll be directed to the main app.
      If not logged in, you'll be directed to the login page.
    
      We can use this code below for our "Add Procedure" button if they're not logged in and our menu "login" button.
      if they're already logged in, the menu button can change to say "Logout" instead
    */

    render() {
      if (this.state.loggedIn) return <App />;
      return <LoginPage />;
    }
  };

export default withAuthenticate;
