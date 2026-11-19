import React from "react";

interface MapBlockProps {
  title?: string;
  scheduleText?: string;
}

/**
 * Блок с картой и ссылкой на расписание.
 *
 * @remarks
 * В макете используется для отображения карты Германии и ссылки на расписание.
 * Тексты настраиваются через пропсы.
 *
 * @param props - Объект с пропсами компонента
 * @param props.title - Заголовок блока (по умолчанию "Карта Германии")
 * @param props.scheduleText - Текст ссылки на расписание (по умолчанию "Расписания")
 *
 * @example
 * ```tsx
 * <MapBlock title="Карта России" scheduleText="Расписание" />
 * ```
 */
export const MapBlock: React.FC<MapBlockProps> = ({
  title = "Карта Германии",
  scheduleText = "Расписания",
}) => (
  <div className="map-block">
    <h3 className="map-block__title">{title}</h3>
    <a href="#" className="map-block__link">
      {scheduleText}
    </a>
  </div>
);
