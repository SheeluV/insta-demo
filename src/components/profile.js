import React, { Component, useReducer } from 'react'
import axios from 'axios';

export class profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            const users = res.data.slice(0, 5);
            this.setState({ users });
        });
    }

    render() {
        const user = this.props.user
        return (
            <div id='profile-div'>
                <div className='profile-head'>
                    <div className='userimg-div'>
                        <img className='user-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXK0jOWkS8_lah2Ff5YTYke4uAFc9aMstlrS7zwY2RAULaHHlDkZ6m407_-hb4-_UPuM&usqp=CAU' />
                    </div>
                    <div className='user-name'>
                        {(user) ?
                            <div>
                                <h6 className='user-mail'>{user.name}</h6>
                                <span className='user-mail'>{user.email}</span>
                            </div>
                            :
                            "Please Login"}
                    </div>
                </div>
                {(user) ?
                <>
                <hr />
                <div className='suggestion-div'>
                <span>Suggestions for you</span>
                {this.state.users.map((user) => (
                    <div className='profile-sug'>
                    <div className='userimg-sug'>
                        <img className='sug-img' src='https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg' />
                    </div>
                    <div className='sug-name'>
                            <div>
                                <h6 className='sug-mail'>{user.name}</h6>
                                <span className='sug-mail'>{user.username}</span>
                            </div>
                    </div>
                    <i class="fa-solid fa-user-plus"></i>
                </div>
                ))}
                </div>
                
                
                </>
                :
            <></>
            }





                
            </div>
        )
    }
}

export default profile