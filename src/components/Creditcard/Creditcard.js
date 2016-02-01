import React from 'react';
import styles from './Creditcard.scss';
import Frontside from './Frontside';
import Backside from './Backside';


class Creditcard extends React.Component {
  constructor(props) {
    super(props);
  }

  flipCard() {
    this.props.actions.flipCard(this.props.creditcard.currentSide);
  };

  currentClass() {
    if(this.props.creditcard.currentSide === 'back') {
      return `${styles.creditCard} ${styles.flipped}`;
    }else {
      return styles.creditCard;
    }
  };

  render() {
    return (<div className={styles.creditcardWrapper} onClick={() => {this.flipCard();}}>
      <div className={this.currentClass()}>
        <Frontside cardHolder={this.props.creditcard.cardHolder} />
        <Backside />
      </div>
    </div>);
  }
}

export default Creditcard;

