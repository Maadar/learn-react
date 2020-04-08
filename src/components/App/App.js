import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
//import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}
App.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  lists: PropTypes.array,
};

export default App;
