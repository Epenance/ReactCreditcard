import React from 'react';
import styles from './Creditcard.scss';

class Backside extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <figure className={`${styles.back} ${styles.cardPage}`}>
        Front
      </figure>
    );
  }
}

export default Backside