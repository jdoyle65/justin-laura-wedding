import React from 'react'

import WeddingApi from '../httpApi'

export default class EnterTokenScene extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }


    onSubmitUserToken() {
        const userToken = this.refs.userTokenInput.value;

        this.checkUserToken(userToken)
            .then(response => {
                this.props.store.update({
                    userToken: userToken,
                    user: response.user_data,
                    weddingData: response.wedding_data
                }, () => {
                    this.props.router.go('dashboard');
                });
            })
            .catch(reject => {
                console.log(reject);
                console.log("Invalid user token...");
            })
    }

    checkUserToken(userToken) {
        if(userToken === 'valid') {
            window.localStorage.setItem('userToken', userToken);
            console.log(WeddingApi.user());
            return WeddingApi.user();
        } else {
            return Promise.reject();
        }
    }

    render() {

        return (
            <div>
                <label htmlFor="">
                    Enter token supplied with invitation
                </label>
                <input ref="userTokenInput" type="text" />

                <button type="button" onClick={this.onSubmitUserToken.bind(this)}>Enter</button>
            </div>
        )
    }

}