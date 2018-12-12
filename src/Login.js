import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from './base'

class Login extends Component {
     constructor(props){
          super(props)

          this.email = null
          this.passwd = null

          this.state = {
               isLoggedIn: false,
               error: false,
               isLogging: false
          }

          this.handleLogin = this.handleLogin.bind(this)
     }
     handleLogin(){
          //Para evitar que fique clicando em logar
         this.setState({
              isLogging: true,
              error: false
          })
          auth
               .signInWithEmailAndPassword(this.email.value, this.passwd.value)
               .then((user) =>{
                    //Se logou entra aqui
                    console.log('logged in', user)
                    this.setState({
                         isLoggedIn: true
                    })
               })
               .catch(error => {
                    //Login incorreto entra aqui e habilita o botão
                    this.setState({
                         error: true,
                         isLogging: false
                    })
               })
     }
     render(){
          if(this.state.isLoggedIn){
             return <Redirect to='/admin' />  
          }
          return(
               <div>
                    <input type='email' ref={ref => this.email = ref} />
                    <input type='passwd' ref={ref => this.passwd = ref}/>
                    {this.state.error && <p>Email e/ou senha inválidos.</p> }
                    <button disabled={this.state.isLogging} onClick={this.handleLogin}> Entrar </button>
               </div>
          )
     }
}
export default Login