import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from "../store/actions";

class User extends Component {
    
    componentDidMount(){
        this.props.getUser()
    }

    render() {
        const { users } = this.props
        return (
            <div>
                {users &&
                    users.map((user) => (
                        <h1 key={user.id}
                            onClick={() => this.props.history.push(
                                `/userdetails/${user.id}`,
                                { id: user.id }
                                )}
                        >
                            {user.id}. {user.name}
                        </h1>
                    ))
                }
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (data) => dispatch(getUser(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)