import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom'
import Login from './Login';
const AdminArea = () => {
    return (
        <BrowserRouter>

            <div>
                <p>You must log in to view the page at /admin</p>
                <Link to="/admin"><button style={{ marginTop: 100, marginLeft: 100 }}>Log in</button></Link>
            </div>


            <Route path="/admin" exact component={Login} ></Route>



        </BrowserRouter>



    );
}

export default AdminArea;