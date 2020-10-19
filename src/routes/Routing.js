import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecipeView } from '../view/RecipeView'
import { HomeView } from '../view/HomeView'

export const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/recipe" component={RecipeView} />
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}