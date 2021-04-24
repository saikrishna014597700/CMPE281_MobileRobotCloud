import React from 'react';

import { Sidebar } from '../Util/Layout';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const user = useSelector(state => state.authentication.user)
    let UserDetails = {};
    if (user) {
        UserDetails = user.data.payload[0];
        console.log("Userd", UserDetails)
    }
    if (user) {
        return (
            <Sidebar>
                <div class="card2">
                    <br />
                    <h2>Welcome {UserDetails.first_name} {UserDetails.last_name} </h2>
                    <br />
                    You logged in as an {UserDetails.role}
                    <br />
                </div>
            </Sidebar>
        )
    }
    return <div>Loading..</div>

}

export default HomePage;