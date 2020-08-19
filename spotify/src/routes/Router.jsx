import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
function Router(props) {
    return (
        <BrowserRouter>
    <Switch>
        {routes.map((route, index) => (
            <Route
            key={index}
            exact={route.exact}
            path={route.path}
            render = {(props)=>(
                <route.layout {...props}>
                    <route.component {...props} />
                </route.layout>

            )}
            />
        ))}
        <Redirect to={"/"} />
    </Switch>
    </BrowserRouter>
    )
    
    
}

export default Router;