import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUserDetail } from '../store/actions';

class UserDetail extends Component {

    componentDidMount(){
        this.props.getUserDetail(this.props.match.params.id)
    }

    render() {
        const user = this.props.user
        return (
            <div>
                <p>{user && user.name}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("state", state)
    return {
        user: state.user.userDetails
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getUserDetail: (id) => dispatch(getUserDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);

