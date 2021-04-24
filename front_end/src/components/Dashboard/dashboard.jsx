import React from 'react';

import { Sidebar } from '../Util/Layout';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const user = useSelector(state => state.authentication.user)
    console.log("Testttttt", user.data)
    let UserDetails = {};
    if (localStorage.getItem('user_fn') && user.data != null) {
        UserDetails = user.data.payload[0];
        localStorage.setItem('user_fn', UserDetails.first_name)
        localStorage.setItem('user_ln', UserDetails.last_name)
        localStorage.setItem('user_role', UserDetails.role)
        console.log("Userd", localStorage.getItem('user'))
    }
    if (localStorage.getItem('user_fn') && user.data != undefined) {
        return (
            <Sidebar>
                <div class="card2">
                    <br />
                    <h2>Welcome {localStorage.getItem('user_fn')} {localStorage.getItem('user_ln')} </h2>
                    <br />
                    You logged in as an {localStorage.getItem('user_role')}
                    <br />
                </div>
            </Sidebar>
        )
    }
    return <Sidebar>Loading..</Sidebar>

}

export default HomePage;