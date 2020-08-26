
import React from "react";
import auth from "./auth-service";	// Importamos funciones para llamadas axios a la API




const { Consumer, Provider } = React.createContext();

// HOC para crear Consumer

const withAuth = (WrappedComponent) => {

    return class extends React.Component {
      render() {
        
        return (
          <Consumer>
  {/* El componente <Consumer> provee un callback que recibe el "value" con el objeto Providers */}  
          { 
            ({login, signup, user, logout, isLoggedin, errorMessage}) => {
            return (
              <WrappedComponent 
                login={login} 
                signup={signup} 
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                errorMessage={errorMessage}
                {...this.props} />
            );
          }}
          </Consumer>
        );
      }
    };
  };



//Provider
class AuthProvider extends React.Component {
    state = { isLoggedin: false, user: null, isLoading: true, errorMessage: "" };


    componentDidMount(){
        auth.me()
        .then((user) => this.setState ({ isLoggedin: true, user: user, isLoading: false}))
        .catch((err) => this.setState({ isLoggedin: false, user: null, isLoading: false }));
        
    }

    signup = (user) => {
        const { nickname, password } = user;
        
        auth.signup({ nickname, password })
          .then((user) => this.setState({ isLoggedin: true, user}) )
          .catch((err) => this.setState({errorMessage: "Este apodo ya existe. Por favor elija otro"}) );
          // .catch((response) => this.setState({ message: response.data.statusMessage}));
      };
    
    
      login = (user) => {
        const { nickname, password } = user;
    
        auth.login({ nickname, password })
          .then((user) => this.setState({ isLoggedin: true, user }))
          .catch((err) => console.log(err));
      };
    
    
      logout = () => {
        auth.logout()
          .then(() => this.setState({ isLoggedin: false, user: null }))
          .catch((err) => console.log(err));
      };


render () {
    const { isLoading, isLoggedin, user, errorMessage} = this.state;
    const { login, logout, signup } = this; 

    return ( 
        isLoading ? 
    <div>Loading</div> 
    :
    (<Provider value={{ isLoggedin, user, login, logout, signup, errorMessage}} >
       {this.props.children}
    </Provider>)
    )	/*<Provider> "value={}" datos que estarán disponibles para todos los componentes <Consumer> */


}


}


export { Consumer, withAuth };		//  <--	RECUERDA EXPORTAR  ! ! !

export default AuthProvider;