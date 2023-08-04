import { useState } from 'react';

//components
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import Switch from '../../components/Switch/Switch';
import styles from './Home.module.scss';

const Home = () => {
  const [val, setVal] = useState(false);
  return (
    <div className={styles.home}>
      <h1>Welcome to a new Template </h1>
      <h3>Let's get started</h3>
      <h5>Components Included : </h5>
      <ul>
        <li>
          Button :{' '}
          <Button
            onClick={() => {
              alert('Button clicked');
            }}>
            Here we go
          </Button>
          <Button
            loading={true}
            onClick={() => {
              alert('Button clicked');
            }}>
            Here we go
          </Button>
        </li>
        <li>
          Spinner : <Spinner theme="blue" scale={2} />
        </li>
        <li>
          Switch :{' '}
          <Switch
            checked={val}
            onChange={(e) => {
              setVal(e.target.checked);
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Home;
