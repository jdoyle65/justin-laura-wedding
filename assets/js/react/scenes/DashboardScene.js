import React from 'react'

import GuestsEditor from '../components/GuestsEditor';

export default class DashboardScene extends React.Component {

    constructor(props) {
        super(props);

        console.log('Dashboard!');
    }

    addGuest(guest) {
        const store = this.props.store.get();
        const user = store.user;

        user.guests.push(guest);

        this.props.store.update({
            user: user
        });
    }

    render() {
        const store = this.props.store.get();
        const user = store.user;

        return (
            <div>
                <h3>Welcome {user.name}</h3>
                <GuestsEditor
                    guests={user.guests}
                    allowedGuests={user.allowedGuests}
                    onGuestAdd={this.addGuest.bind(this)}
                />
            </div>
        )
    }
}