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

    deleteGuest(guestId) {
        const store = this.props.store.get();
        const user = store.user;
        let guests = store.user.guests;

        const guestIndex = store.user.guests.findIndex(g => g.id === guestId);
        if(guestIndex < 0) {
            return;
        }

        guests = guests
            .slice(0, guestIndex)
            .concat(guests.slice(guestIndex + 1, guests.length));


        user.guests = guests;

        this.props.store.update({user: user});
    }

    render() {
        const store = this.props.store.get();
        const user = store.user;

        return (
            <div>
                <h3>Welcome {user.name}</h3>
                <GuestsEditor
                    guests={user.guests}
                    store={this.props.store}
                    allowedGuests={user.allowed_guests}
                    onGuestAdd={this.addGuest.bind(this)}
                    onGuestDelete={this.deleteGuest.bind(this)}
                />
            </div>
        )
    }
}