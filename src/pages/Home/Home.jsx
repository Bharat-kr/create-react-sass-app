import { useState } from 'react';

//components
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import Switch from '../../components/Switch/Switch';
import styles from './Home.module.scss';
import Input from '../../components/Input/Input';
import Tooltip from '../../components/Tooltip/Tooltip';
import Icon from '../../icons/Icon';
import Select from '../../components/Select/Select';

const Home = () => {
  const [val, setVal] = useState(false);
  const [option, setOption] = useState('');
  const [multiOption, setMultiOption] = useState([]);
  return (
    <div className={styles.home}>
      <h1>Welcome to a new Template </h1>
      <h4>Let's get started :)</h4>
      <h3>Components Included</h3>
      <ul>
        <li>
          Button :{' '}
          <Button
            onClick={() => {
              alert('Button clicked');
            }}>
            Here we go
          </Button>
        </li>
        <li>
          Loading Button :
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

        <li>
          Select :
          <Select
            value={option}
            options={[{ label: 'Option 1', value: 'option_1' }]}
            onChange={(val) => {
              setOption(val);
            }}
          />
        </li>
        <li>
          Searchable Select :{' '}
          <Select
            isSearchable={true}
            value={option}
            options={[{ label: 'Option 1', value: 'option_1' }]}
            onChange={(val) => {
              setOption(val);
            }}
          />
        </li>
        <li>
          Multi Select :{' '}
          <Select
            isMulti={true}
            value={multiOption}
            options={[
              { label: 'Option 1', value: 'option_1' },
              { label: 'Option 2', value: 'option_2' },
              { label: 'Option 3', value: 'option_3' },
              { label: 'Option 4', value: 'option_4' }
            ]}
            onChange={(val) => {
              setMultiOption([...val]);
            }}
          />
        </li>
        <li>
          Multi Select with searchable :{' '}
          <Select
            isMulti={true}
            isSearchable={true}
            value={multiOption}
            options={[
              { label: 'Option 1', value: 'option_1' },
              { label: 'Option 2', value: 'option_2' },
              { label: 'Option 3', value: 'option_3' },
              { label: 'Option 4', value: 'option_4' }
            ]}
            onChange={(val) => {
              setMultiOption([...val]);
            }}
          />
        </li>
        <li>
          ToolTip :{' '}
          <Tooltip value="copy">
            <Icon size={18} name="copy" />
          </Tooltip>
        </li>
      </ul>
    </div>
  );
};

export default Home;
