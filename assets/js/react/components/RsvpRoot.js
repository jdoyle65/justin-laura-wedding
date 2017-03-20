import React from 'react';

import EnterTokenScene from '../scenes/EnterTokenScene';

export default class RsvpRoot extends React.Component {

    constructor() {
        super();

        this.state = {
            route: 'enterToken',
            routeData: {},
            store: {
                userToken: 'invalid'
            },
        }
    }

    componentDidMount() {
        this.loadUserTokenFromLocalStorage();
    }

    route(routeName, data) {
        this.setState({
            route: routeName,
            routeData: data
        });
    }

    loadUserTokenFromLocalStorage() {
        const userToken = window.localStorage.getItem('userToken');

        if (userToken === undefined || userToken === null) {
            const newStore = Object.assign({}, this.state.store, {userToken: null});
            this.setState({
                store: newStore,
                route: 'enterToken',
                routeData: {
                    userToken: null
                }
            });
        } else {
            const newStore = Object.assign({}, this.state.store, {userToken: userToken});

            this.setState({
                store: newStore
            });
        }
    }

    renderRoute(routeName, routeData) {
        const routeComponent = this.componentForRoute(routeName, routeData);

        return (
            <div>
                {routeComponent}
            </div>
        )
    }

    getStore() {
        return this.state.store;
    }

    updateStore(store, callback = () => {}) {
        const newStore = Object.assign({}, this.getStore(), store);

        console.log(newStore);

        this.setState({ store: newStore }, callback());
    }

    buildStoreToPass() {
        return {
            get: () => {
                return this.getStore()
            },
            update: (store, callback) => {
                return this.updateStore(store, callback);
            }
        }
    }

    buildRouterToPass() {
        return {
            go: (route, routeData = {}) => {
                this.setState({
                    route: route,
                    routeData: routeData
                });
            }
        }
    }

    componentForRoute(routeName, routeData) {
        const defaultProps = {
            store: this.buildStoreToPass(),
            router: this.buildRouterToPass()
        };

        switch(routeName) {
            case 'enterToken': return <EnterTokenScene {...routeData} {...defaultProps} />;
            default: return <div>Invalid Route!!</div>;
        }
    }

    render() {
        return (
            <div>
                {this.renderRoute(this.state.route)}
            </div>
        )
    }

}