import { constants } from 'buffer';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListaTodoContext from '../Contexts/ListaTodoContext';
import AddTodo from './AddTodo';
import Lista from './Lista';
import Navbar from './Navbar';

const App = () => {
    return (
        <ListaTodoContext>
            <Navbar></Navbar>
            <br />
            <Router>
                <div className="uk-container">
                    <Switch>
                        <Route path="/create">
                            <AddTodo></AddTodo>
                        </Route>
                        <Route path="/">
                            <Lista></Lista>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ListaTodoContext>
    )
};

export default App;
