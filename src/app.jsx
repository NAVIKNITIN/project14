import React, { Component ,lazy,Suspense} from 'react';
import Navigation from './component/navigation';
import {Route, Switch} from 'react-router-dom';
import Home from './component/home';
// import Help from './component/help';
// import Admin from './component/admin';
// import Items from './component/shopping';


class App extends Component{
    Admin = React.lazy(()=>import("./component/admin"));
    Help = React.lazy(()=>import("./component/help"));
    Shopping = React.lazy(()=>import("./component/shopping"));

    render(){
        return(
            <React.Fragment>
                <Navigation />
                <Switch>
                <Route path="/" exact component={Home}/>
                <Route  path="/home" exact component={Home}/>
                <Suspense fallback={<h4>Loading...</h4>}>
                <Route path="/shopping" exact render={(props)=><this.Shopping data="shoes" {...props }/>}/>
                <Route  path="/help" exact component={this.Help}/>
                <Route  path="/admin" exact component={this.Admin}/>
                
                <Route  path="/Items/:id" exact component={this.Shopping}/>
                </Suspense>
                
                </Switch>
            </React.Fragment>
        ) 
    }
};
export default App;
