import React, { PureComponent } from 'react';
import './Container.css';
import Comment from '../Comment/Comment';


class Container extends PureComponent {
    state = {
       textarea: "",
       comments: []
    }

    onTextChange = (e) => {
        this.setState({textarea: e.target.value});
    };

    addComment = () => {
      this.setState(prevState => ({
          comments: [
              {text: prevState.textarea},
              ...prevState.comments
          ],
          textarea: ""
      }))
    };

    render() {
        return(
            <div className="wrapper container">
                <div className="row ">
                    <div className="col-lg-8">
                        <h1 className="mt-4">Post Title</h1>
                        <p className="lead">
                            by <a href="#">Start Bootstrap</a>
                        </p>
                        <hr/>
                        <p className="post-date">Posted on January 1, 2018 at 12:00 PM</p>
                        <hr/>
                        <div className="card my-4">
                            <h5 className="card-header">Leave a Comment:</h5>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            value={this.state.textarea}
                                            onChange={this.onTextChange}
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={this.addComment}
                                        disabled={this.state.textarea===""}
                                    >Submit</button>
                                </form>
                            </div>
                        </div>
                        {this.state.comments.map(item => <Comment data={item}/>)}
                    </div>
                    <div className="col-md-4">
                        <div className="card my-4">
                            <h5 className="card-header">Search</h5>
                            <div className="card-body">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..."/>
                                    <span className="input-group-btn">
                                              <button className="btn btn-secondary" type="button">Go!</button>
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div className="card my-4">
                            <h5 className="card-header">Categories</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <a href="#">Web Design</a>
                                            </li>
                                            <li>
                                                <a href="#">HTML</a>
                                            </li>
                                            <li>
                                                <a href="#">Freebies</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <a href="#">JavaScript</a>
                                            </li>
                                            <li>
                                                <a href="#">CSS</a>
                                            </li>
                                            <li>
                                                <a href="#">Tutorials</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card my-4">
                            <h5 className="card-header">Side Widget</h5>
                            <div className="card-body">
                                You can put anything you want inside of these side widgets. They are easy to use,
                                and feature the new Bootstrap 4 card containers!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;