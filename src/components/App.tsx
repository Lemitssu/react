import React from 'react';
import { User } from '../Model/Model'
import { AuthService } from '../services/AuthService'
interface AppState{
  user: User | undefined
}
export class App extends React.Component<{}, AppState>{

  private authService : AuthService = new AuthService();
  render(){
    return(
      <div>App from class works!!!</div>
    )
  }
}