import React, { Component } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "awesome-react-icons";

export const Navbar = () => {
    const history = useHistory();
    const location = useLocation();
    return (
        <div style={{ width: "17%" }}>
            <Navigation
                activeItemId={location.pathname}
                onSelect={({ itemId }) => {
                    history.push(itemId);
                }}
                items={[
                    {
                        title: 'Dashboard',
                        itemId: '#',
                        elemBefore: () => <Icon name="activity" />
                    },
                    {
                        title: 'Users',
                        // itemId: '/users',
                        elemBefore: () => <Icon name="users" />,
                        subNav: [
                            {
                                title: 'Registered Users',
                                itemId: '/registeredUsers',
                            },
                            {
                                title: 'Active Users',
                                itemId: '/activeUsers',
                            },
                        ],
                    },
                    {
                        title: 'Robots',
                        // itemId: '/robots',
                        elemBefore: () => <Icon name="radio" />,
                        subNav: [
                            {
                                title: 'Registered Robots',
                                itemId: 'registeredrobots',
                            },
                            {
                                title: 'Active Robots',
                                itemId: 'activerobots',
                            }
                        ],
                    },
                    {
                        title: 'State distribution',
                        itemId: '/stateDistribution',
                        elemBefore: () => <Icon name="lock" />
                    },
                    {
                        title: 'Logout',
                        itemId: '/logout',
                        elemBefore: () => <Icon name="lock" />
                    },
                ]}
            />
        </div>
    );

}

export default { Navbar };
