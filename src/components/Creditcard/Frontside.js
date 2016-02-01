import React from 'react';
import styles from './Creditcard.scss';

class Frontside extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure className={`${styles.front} ${styles.cardPage}`}>
        <span className={styles.cardHolder}>
          {this.props.cardHolder ? this.props.cardHolder : 'Jane Doe'}
        </span>
        <span className={styles.cardNumber}>4847 4823 2313 4156</span>
        <span className={styles.cardExpire}>08 / 19</span>
        <span className={styles.cardCompany}>VISA</span>
        <div className={styles.chip}></div>
      </figure>
    );
  }
}

export default Frontside