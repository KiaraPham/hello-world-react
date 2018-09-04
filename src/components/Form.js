import React from 'react';

class ExampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      hobby: 'sport',
      isGoing: true,
      numberOfGuests: 2
    };
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value.toUpperCase()
    });
  }

  handleChangeAddress = (event) => {
    this.setState({
      address: event.target.value
    });
  }

  handleChangeHobby = (event) => {
    this.setState({
      hobby: event.target.value
    });
  }

  handleChangeReservation = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    alert(`
    Your name: ${this.state.name}
    Your address: ${this.state.address}
    Your hobby: ${this.state.hobby}
    Number of guests: ${this.state.numberOfGuests}
    `)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
          </label>
        </div>

        <div className="form-group">
          <label>
            Address:
            <input type="text" value={this.state.address} onChange={this.handleChangeAddress}/>
          </label>
        </div>

        <div className="form-group">
          <label>
            Pick your hobby:
            <select value={this.state.value} onChange={this.handleChangeHobby}>
              <option value="sport">Sport</option>
              <option value="shopping">Shopping</option>
              <option value="travel">Travel</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleChangeReservation}/>
          </label>
        </div>

        <div className="form-group">
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              checked={this.state.numberOfGuests}
              onChange={this.handleChangeReservation}/>
          </label>
        </div>

        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default ExampleForm;