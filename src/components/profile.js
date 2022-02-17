import React, { Component, useReducer } from 'react'

export class profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }
    }

    logged = () => {
        this.setState({ user: JSON.parse(localStorage.getItem('user')) })
    }


    render() {
        // const user = JSON.parse(localStorage.getItem('user'))
        // console.log(user.name);
        return (
            <div id='profile-div'>
                <div className='profile-head'>
                    <div className='userimg-div'>
                        <img className='user-img' src='https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg' />
                    </div>
                    <div className='user-name'>
                        {(this.state.user.name !== null) ?
                            <div>
                                <h6 className='user-mail'>{this.state.user.name}</h6>
                                <span className='user-mail'>{this.state.user.email}</span>
                            </div>

                            :
                            "Please Login"}
                    </div>
                </div>
            </div>
        )
    }
}

export default profile