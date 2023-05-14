import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.module.css';
import { useUpdateCommentsMutation } from '../../redux/commentApi';

export const Button = ({ children, counter, role = 'thumbsUp', id, onUpdateComment}) => {
  const [updateLike, {isLoading}] = useUpdateCommentsMutation();
  
  const variants = {
    [styles.thumbsUp]: role === 'thumbsUp',
    [styles.thumbsDown]: role === 'thumbsDown',
  };

  const onBtnHandleClick = async () => {
    try {
      let newCounter = 0;
      if (role === 'thumbsUp') {
        newCounter = counter + 1;
      } else {
        newCounter = counter - 1;
      }

      onUpdateComment({id, [role]: newCounter})
      await updateLike({id, [role]: newCounter})
    } catch (error) {
      
    }

  };

  return (
    <button
      className={classNames(styles.button, variants)}
      type='button'
      counter={counter}
      onClick={onBtnHandleClick}
      id={id}
    >
      {children}

      <span className={styles.counter}>
        <span></span>
        {counter}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  counter: PropTypes.number.isRequired,
  role: PropTypes.string,
  id: PropTypes.string.isRequired,
};
