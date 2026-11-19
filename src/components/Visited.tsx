import React from "react";
import { VisitItem } from "../types";

interface VisitedProps {
  title?: string;
  items: VisitItem[];
}

/**
 * Блок "Посещаемое".
 *
 * @remarks
 * Содержит список популярных сервисов с краткими описаниями.
 * Каждый элемент кликабелен и ведет на соответствующую страницу.
 *
 * @param props - Объект с пропсами компонента
 * @param props.title - Заголовок блока (по умолчанию "Посещаемое")
 * @param props.items - Массив сервисов (название, описание, ссылка)
 *
 * @example
 * ```tsx
 * <Visited items={[{ id: 1, title: 'Недвижимость', description: 'о сталинках', href: '#' }]} />
 * ```
 */
export const Visited: React.FC<VisitedProps> = ({
  title = "Посещаемое",
  items,
}) => (
  <div className="visited">
    <h3 className="visited__title">{title}</h3>
    <ul className="visited__list">
      {items.map((item) => (
        <li key={item.id} className="visited-item">
          <a href={item.href} className="visited-item__title">
            {item.title}
          </a>
          <span className="visited-item__desc"> — {item.description}</span>
        </li>
      ))}
    </ul>
  </div>
);
