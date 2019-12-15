import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }



  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
    }

    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data));

    console.log(user)

    this.setState({
      username: ''
    })


}


render() {
    return (
      <div>
          <h3>Sign up</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <input type="text"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  />
               </div>
               <div className="form-group">
                 <label>Email: </label>
                 <input  type="text"
                     required
                     className="form-control"
                     value={this.state.email}
                     onChange={this.onChangeEmail}
                     />
               </div>
               <div className="form-group">
               <input type="submit" value="Create User" className="btn btn-primary" />
               <input type="submit" value="Add Email" className="btn btn-primary" />
               </div>
               </form>
               </div>
    )
  }
}
