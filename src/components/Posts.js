import React from "react";
import axios from "axios";
import Navbar from "./navbar";
import Profile from "./profile";
import '../css/Posts.css';
import '../css/profile.css';

class Posts extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            body: {},
            posts: [],
            comments: [],
            clicked: null,
            loged: false,
            days: Math.floor(Math.random() * 10 + 1),
            profile: JSON.parse(localStorage.getItem('user')),
            key: 86
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
            const posts = res.data.slice(47, 105);
            this.setState({ posts });
        });
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            const comments = res.data.slice(80, 85);
            this.setState({ comments });
        });
    }

    viewComments = (id) => () => {

        this.setState(prevState => ({
            clicked: prevState.clicked === id ? null : id,
        }));
        console.log(id);

        if (!localStorage.getItem('user')) { this.props.handleLoged() }


    }

    handleChange = (event) => {
        this.setState({ body: event.target.value });
    };

    addComment = (event) => {
        event.preventDefault();
        const add = {};
        axios
            .put("https://jsonplaceholder.typicode.com/posts/1", add)
            .then((res) => {
                const pst = {
                    id: this.state.key,
                    title: this.state.body
                };
                console.log(this.state.body);
                const comment = this.state.comments.push(pst);
                console.log(comment);
                this.setState({ comment });
            });
        this.setState(prevState => ({
            key: prevState.key + 1,
        }))
    };

    handleProfile = () => {
        this.setState({ profile: JSON.parse(localStorage.getItem('user')) })
    }


    render() {
        return (
            <div>
                <Navbar loged={this.props.loged} handleLoged={this.props.handleLoged} handleProfile={this.handleProfile}/>
                <div id="home-div">
                    <Profile user={this.state.profile} />

                    <ul id="posts-list">
                        {this.state.posts.map((Posts) => (
                            <li className="posts">
                                <div className="head post-element">
                                    <img className="thumbnail" src={Posts.thumbnailUrl} />
                                    <div className="author">Author Name</div>
                                </div>
                                <div className=" post-element">
                                    <img src={Posts.url} className="post-img" />
                                </div>
                                <div className="head post-element">
                                    <i className="fa-regular fa-heart post-react"></i>
                                    <i className="fa-regular fa-comment post-react"
                                        onClick={this.viewComments(Posts.id)}
                                    ></i>
                                    <i className="fa-regular fa-paper-plane post-react"></i>
                                    <i className="fa-regular fa-bookmark post-react d-flex "></i>
                                </div>
                                <div className="captions post-element"> {Posts.title} </div>
                                <div className="view-comment post-element" onClick={this.viewComments(Posts.id)}>
                                    View all {this.state.comments.length} comments
                                    {/* <br /> */}

                                    {/* <button
                                    className="comment-btn btn btn-light"
                                    onClick={this.viewComments(Posts.id)}
                                >
                                 Comments <i className="fa-solid fa-comments"></i>
                                    

                                </button> */}
                                </div>
                                <div className="view-comment post-element">
                                    {this.state.days} days ago </div>
                                {this.state.clicked === Posts.id && (localStorage.getItem('user')) ?
                                    <li className="comment-div">
                                        <ul className="comment-list">
                                            {this.state.comments.map((comments) => (
                                                <li className="each-comment">
                                                    <div className="user-div"><i className="fa-solid fa-user-large"></i></div>
                                                    {comments.title} <br />
                                                </li>
                                            ))}
                                            <li className="add-comment">
                                                <label>
                                                    <input
                                                        type="text"
                                                        name="Comment"
                                                        placeholder="Add comment"
                                                        onChange={this.handleChange}>
                                                    </input>
                                                </label>
                                                <button className="btn btn-light" onClick={this.addComment}>
                                                    <i className="fa-solid fa-location-arrow"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </li> : <></>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}


export default Posts