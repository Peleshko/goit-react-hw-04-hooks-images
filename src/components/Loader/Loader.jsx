import React from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const Spinner = () => (
  <div className={s.Spinner}>
    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
  </div>
);

export default Spinner;
