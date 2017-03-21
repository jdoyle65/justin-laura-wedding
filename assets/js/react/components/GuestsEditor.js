import React from 'react';


export default class GuestsEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedMeal: null
        };
    }

    addGuest(guest) {
        if (typeof this.props.onGuestAdd !== 'function') {
            return;
        }

        this.props.onGuestAdd(guest);
    }

    onAddGuestClick() {
        let guest = {
            name: this.refs.addGuestInput.value,
            meal_choice_id: this.state.selectedMeal,
            dietary_restrictions: this.refs.dietaryRestrictionsInput.value
        }

        this.addGuest(guest);
        this.refs.addGuestInput.value = '';
        this.refs.dietaryRestrictionsInput.value = '';
        this.setState({
            selectedMeal: null
        });
    }

    getGuests() {
        let guests = this.props.guests;
        if (!Array.isArray(guests)) {
            guests = [];
        }

        return guests;
    }

    deleteGuest(guestId, event) {
        event.preventDefault();
        this.props.onGuestDelete(guestId);
    }

    renderGuests() {
        let guests = this.getGuests();
        console.log(guests);

        return (
            <ul>
                {
                    guests.map((g, i) => {
                        if (g.name !== undefined) {
                            return <li key={i}>{this.renderGuest(g)}</li>
                        }
                    })
                }
            </ul>
        )
    }

    renderGuest(guest) {
        let weddingData = this.props.store.get().weddingData;
        let mealChoices = weddingData.meal_choices;
        console.log(mealChoices);

        if (!Array.isArray(mealChoices)) {
            mealChoices = [];
        }

        let mealChoice = mealChoices.find(m => m.id === guest.meal_choice_id);
        let mealName = '??';

        if (typeof mealChoice !== 'undefined' && typeof mealChoice.name === 'string') {
            mealName = mealChoice.name;
        }

        return (
            <div>
                {guest.name} - <a href='' onClick={e => this.deleteGuest(guest.id, e)}>Delete</a><br/>
                Chosen meal: {mealName}<br/>
                Dietary Restrictions: {guest.dietary_restrictions}
            </div>
        )
    }

    renderGuestInputs() {
        let weddingData = this.props.store.get().weddingData;
        let guestCount = this.getGuests().length;
        let maxGuests = this.props.allowedGuests;
        let mealChoices = [];

        if (Array.isArray(weddingData.meal_choices)) {
            mealChoices = weddingData.meal_choices;
        }

        if (guestCount >= maxGuests) {
            return null;
        }

        return (
            <div>
                <label>Name: </label>
                <input ref="addGuestInput" type="text"/>
                <br/>
                <label>Meal Choice: </label>
                {
                    mealChoices.map(m => {
                        return (
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="mealChoice"
                                        value={m.id}
                                        checked={this.state.selectedMeal === m.id}
                                        onChange={() => this.setState({selectedMeal: m.id})}
                                    />
                                    {m.name}</label>
                            </div>
                        )
                    })
                }
                <label>Dietary Restrictions: </label>
                <input ref="dietaryRestrictionsInput" type="text"/>

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