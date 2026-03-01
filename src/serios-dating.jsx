import React from 'react';

class DatingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: null,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    // Fetch users from an API or local storage
    const users = await fetch('/api/users').then(res => res.json());
    this.setState({ users });
  }

  handleUserSelect = (user) => {
    this.setState({ currentUser: user });
  }

  render() {
    const { users, currentUser } = this.state;

    return (
      <div className="dating-app">
        <h1>Dating App</h1>
        <div className="user-list">
          {users.map(user => (
            <div key={user.id} onClick={() => this.handleUserSelect(user)}>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
            </div>
          ))}
        </div>
        {currentUser && (
          <div className="user-detail">
            <h2>{currentUser.name}</h2>
            <p>{currentUser.bio}</p>
            {/* Add more user details as needed */}
          </div>
        )}
      </div>
    );
  }
}

export default DatingApp;