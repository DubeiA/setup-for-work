import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import MediaQuery from 'react-responsive';
import { Circles } from 'react-loader-spinner';

import {
  getWeatherCurrent,
  getWeatherLocation,
  getIsLoading,
} from '../../../../redux/weather/selectors';

import { WeatherCard } from '../WeatherCard/WeatherCard';
import { MobileWeatherCard } from '../MobileWeatherCard/MobileWeatherCard';

import css from './WeatherList.module.css';

export const WeatherList = () => {
  const location = useSelector(getWeatherLocation);
  const current = useSelector(getWeatherCurrent);
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      {isLoading && (
        <Circles
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass={css.loader}
          visible={true}
        />
      )}
      <MediaQuery minWidth={769}>
        <div className={css.container}>
          <ul className={css.list}>
            {location.map((locat, index) => {
              const curr = current[index];

              return (
                <li
                  className={curr.cloud >= 50 ? css.itemCloud : css.itemSun}
                  key={nanoid()}
                >
                  <WeatherCard data={locat} curr={curr} />
                </li>
              );
            })}
          </ul>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <div className={css.container_tel}>
          <ul className={css.list}>
            {location.map((locat, index) => {
              const curr = current[index];
              return (
                <li
                  className={curr.cloud >= 50 ? css.itemCloud : css.itemSun}
                  key={nanoid()}
                >
                  <MobileWeatherCard data={locat} curr={curr} />
                </li>
              );
            })}
          </ul>
        </div>
      </MediaQuery>
    </>
  );
};
