import React from 'react';


export default class GuestsEditor extends React.Component {

    addGuest(guestName) {
        if(typeof this.props.onGuestAdd !== 'function') {
            return;
        }

        this.props.onGuestAdd({
            name: guestName
        });
    }

    onAddGuestClick() {
        this.addGuest(this.refs.addGuestInput.value);
        this.refs.addGuestInput.value = '';
    }

    getGuests() {
        let guests = this.props.guests;
        if(!Array.isArray(guests)) {
            guests = [];
        }

        return guests;
    }

    renderGuests() {
        let guests = this.getGuests();
        console.log(guests);

        return (
            <ul>
                {
                    guests.map((g,i) => {
                        if(g.name !== undefined) {
                            return <li key={i}>{g.name}</li>
                        }
                    })
                }
            </ul>
        )
    }

    renderGuestInputs() {
        let guestCount = this.getGuests().length;
        let maxGuests = this.props.allowedGuests;

        if(guestCount >= maxGuests) {
            return null;
        }

        return (
            <div>
                <label htmlFor="">
                    +
                </label>
                <input ref="addGuestInput" type="text" />
                <button type="button" onClick={this.onAddGuestClick.bind(this)}>Add</button>

                <div className="text-yellow">You can add {maxGuests - guestCount} more guest(s)</div>
            </div>
        )
    }

    render() {

        return (
            <div>
                {this.renderGuests()}
                {this.renderGuestInputs()}
            </div>
        );
    }

}