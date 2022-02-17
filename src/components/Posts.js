import React from "react";
import axios from "axios";
import '../css/Posts.css';
import Navbar from "./navbar";

class Posts extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            body: {},
            posts: [],
            comments: [],
            clicked: null,
            loged: false,
            days: Math.floor(Math.random() * 10 + 1)
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
            const posts = res.data.slice(65, 95);
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
                    title: this.state.body
                };
                console.log(this.state.body);
                const comment = this.state.comments.push(pst);
                console.log(comment);
                this.setState({ comment });
            });
    };


    render() {
        return (
            <div>
                <Navbar loged={this.props.loged} handleLoged={this.props.handleLoged} />

                <ul>
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
                                <i class="fa-regular fa-bookmark post-react d-flex "></i>
                            </div>
                            <div className=" post-element"> {Posts.title} </div>
                            <div className="view-comment post-element" onClick={this.viewComments(Posts.id)}>
                                View all {this.state.comments.length} comments
                                {/* <br /> */}

                                {/* <button
                                    className="comment-btn btn btn-light"
                                    onClick={this.viewComments(Posts.id)}
                                >
                                 Comments <i class="fa-solid fa-comments"></i>
                                    

                                </button> */}
                            </div>
                            <div className="view-comment post-element">
                                {this.state.days} days ago </div>
                            {this.state.clicked === Posts.id && (localStorage.getItem('user')) ?
                                <li className="comment-div">
                                    <ul className="comment-list">
                                        {this.state.comments.map((comments) => (
                                            <li className="each-comment">
                                                <div className="user-div"><i class="fa-solid fa-user-large"></i></div>
                                                {comments.title} <br />
                                            </li>
                                        ))}
                                        <li className="each-comment">
                                            <label>
                                                <input type="text" name="Comment" placeholder="Add comment" onChange={this.handleChange} />
                                            </label>
                                            <button class="btn btn-light" onClick={this.addComment}>
                                                <i class="fa-solid fa-location-arrow"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </li> : <></>}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default Posts