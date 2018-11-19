import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import User from '../User'
import './users.scss'

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    async componentDidMount() {
        try {
            const response = await fetch(`/api/users`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const users = await response.json();
            this.setState({ users });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { users } = this.state;
        return (
            <div className="users-list">
                <ul>
                    {users.map(({ name, id, email}) =>
                        <li key={id}>
                            <Link to={'/users/' + id}>{name} {email}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Users
