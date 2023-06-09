import { Link } from 'react-router-dom';

import { WeatherSearch } from './WeatherSearch/WeatherSearch';
import { WeatherList } from './WeatherList/WeatherList';
import { Clock } from 'components/Clock/Clock';

import css from './WeatherPage.module.css';

export const Weather = () => {
  return (
    <div>
      <div>
        <h3 className={css.header}>Weather</h3>
        <Link to={'/'} className={css.linkHome}>
          To Home
        </Link>
        <Clock />
      </div>
      <WeatherSearch />
      <WeatherList />
    </div>
  );
};
