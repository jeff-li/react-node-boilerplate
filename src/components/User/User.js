import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { userData: {} };
    }

    async componentDidMount() {
        try {
            let userId = this.props.match.params.userId
            let url = '/api/users/' + userId
            const response = await fetch(url);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const userData = await response.json();
            this.setState({ userData });
            console.log(this.state)
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const user = this.state.userData;
        return (
            <div>
                <h2>Name: {user.name}</h2>
                <h3>Email: {user.email}</h3>
                <h3>Verified?: {String(user.email_verified)}</h3>

            </div>
        )
    }
}

export default User;
