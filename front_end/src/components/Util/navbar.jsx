import React, { Component } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "awesome-react-icons";

export const Navbar = () => {
    const history = useHistory();
    const location = useLocation();
    return (
        <div style={{ width: "17%", backgroundColor: "#B1DCF1" }}>
            <Navigation
                activeItemId={location.pathname}
                onSelect={({ itemId }) => {
                    history.push(itemId);
                }}
                items={[
                    {
                        title: 'Dashboard',
                        itemId: '/dashboard',
                        elemBefore: () => <Icon name="activity" />
                    },
                    {
                        title: 'Users',
                        itemId: '#',
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
                        // itemId: '##',
                        elemBefore: () => <Icon name="radio" />,
                        subNav: [
                            {
                                title: 'Registered Robots',
                                itemId: '/registeredRobots',
                            },
                            {
                                title: 'Active Robots',
                                itemId: '/activeRobots',
                            }
                        ],
                    },
                    {
                        title: 'Admin Billing',
                        itemId: '/adminBilling',
                        elemBefore: () => <Icon name="briefcase" />
                    },
                    {
                        title: 'State distribution',
                        itemId: '/stateDistribution',
                        elemBefore: () => <Icon name="book" />
                    },
                    {
                        title: 'Logout',
                        itemId: '/login',
                        elemBefore: () => <Icon name="lock" />
                    },
                ]}
            />
        </div>
    );

}

export default { Navbar };
