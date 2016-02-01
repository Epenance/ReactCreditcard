import React from 'react';

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
  }
  handleCardholder = (event) => {
    this.props.actions.nameChange(event.target.value);
  };
  render() {
    return (
      <form action="">
        <input type="text" id="name" placeholder="Name" value={this.props.creditcard.cardHolder} onChange={this.handleCardholder}/>
      </form>
    );
  }
}

export default CreditCardForm;