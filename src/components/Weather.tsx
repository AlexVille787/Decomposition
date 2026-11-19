import React from "react";
import { WeatherInfo } from "../types";

interface WeatherProps {
  title?: string;
  info: WeatherInfo;
}

/**
 * Блок отображения текущей погоды.
 *
 * @remarks
 * Показывает температуру, иконку, а также данные на утро и день.
 * Может использоваться для разных городов, если передать соответствующий `info`.
 *
 * @param props - Объект с пропсами компонента
 * @param props.title - Заголовок блока (по умолчанию "Погода")
 * @param props.info - Объект с информацией о погоде (температура, утро, день, иконка)
 *
 * @example
 * ```tsx
 * <Weather
 *   info={{ temp: '+17°', morning: '+17,', day: '+20', icon: '🌧️' }}
 * />
 * ```
 */
export const Weather: React.FC<WeatherProps> = ({ title = "Погода", info }) => (
  <div className="weather">
    <h3 className="weather__title">{title}</h3>
    <div className="weather__main">
      <span className="weather__icon">{info.icon}</span>
      <span className="weather__temp">{info.temp}</span>
    </div>
    <div className="weather__details">
      <div>Утром {info.morning}</div>
      <div>днём {info.day}</div>
    </div>
  </div>
);
