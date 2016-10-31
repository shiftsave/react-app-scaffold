import React, { Component } from 'react';

import '../styles/_Reset.scss';
import styles from '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>New project</p>
      </div>
    );
  }
}

export default App;
