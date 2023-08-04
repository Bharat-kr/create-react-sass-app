import { useState } from 'react';

//components
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import Switch from '../../components/Switch/Switch';
import styles from './Home.module.scss';
import Input from '../../components/Input/Input';

const Home = () => {
  const [val, setVal] = useState(false);
  return (
    <div className={styles.home}>
      <h1>Welcome to a new Template </h1>
      <h4>Let's get started</h4>
      <h3>Components Included : </h3>
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
        <li>
          Normal Input : <Input />
        </li>
        <li>
          Phone Input : <Input type="phone" isCopyable={true} />
        </li>
        <li>
          Password Input : <Input type="password" />
        </li>
        <li>
          Search Input : <Input type="search" />
        </li>
      </ul>
    </div>
  );
};

export default Home;
