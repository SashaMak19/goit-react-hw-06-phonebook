import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/slices/filterSlice';
import styles from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.filter);

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={inputValue}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      ></input>
    </label>
  );
};

export { Filter };
