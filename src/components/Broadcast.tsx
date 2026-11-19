import React from "react";
import { BroadcastItem } from "../types";

interface BroadcastProps {
  title?: string;
  items: BroadcastItem[];
}

/**
 * Блок "Эфир" со списком текущих передач.
 *
 * @remarks
 * Отображает передачи, которые идут в эфире прямо сейчас.
 * Список передач передается через пропс `items`.
 *
 * @param props - Объект с пропсами компонента
 * @param props.title - Заголовок блока (по умолчанию "Эфир")
 * @param props.items - Массив передач (иконка, название, канал)
 *
 * @example
 * ```tsx
 * <Broadcast items={[{ id: 1, icon: '▶️', title: 'Новости', channel: 'Первый' }]} />
 * ```
 */
export const Broadcast: React.FC<BroadcastProps> = ({
  title = "Эфир",
  items,
}) => (
  <div className="broadcast">
    <h3 className="broadcast__title">{title}</h3>
    <ul className="broadcast__list">
      {items.map((item) => (
        <li key={item.id} className="broadcast-item">
          <span className="broadcast-item__icon">{item.icon}</span>
          <span className="broadcast-item__title">{item.title}</span>
          <span className="broadcast-item__channel">{item.channel}</span>
        </li>
      ))}
    </ul>
  </div>
);
