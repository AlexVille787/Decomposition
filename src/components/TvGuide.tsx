import React from "react";
import { TvProgram } from "../types";

interface TvGuideProps {
  title?: string;
  programs: TvProgram[];
}

/**
 * Блок с телепрограммой.
 *
 * @remarks
 * Отображает список телепередач с указанием времени, названия и канала.
 * Список передач передается через пропс `programs`.
 *
 * @param props - Объект с пропсами компонента
 * @param props.title - Заголовок блока (по умолчанию "Телепрограмма")
 * @param props.programs - Массив телепередач (время, название, канал)
 *
 * @example
 * ```tsx
 * <TvGuide programs={[{ id: 1, time: '02:00', title: 'THT. Best', channel: 'THT' }]} />
 * ```
 */
export const TvGuide: React.FC<TvGuideProps> = ({
  title = "Телепрограмма",
  programs,
}) => (
  <div className="tv-guide">
    <h3 className="tv-guide__title">{title}</h3>
    <ul className="tv-guide__list">
      {programs.map((p) => (
        <li key={p.id} className="tv-program">
          <span className="tv-program__time">{p.time}</span>
          <span className="tv-program__title">{p.title}</span>
          <span className="tv-program__channel">{p.channel}</span>
        </li>
      ))}
    </ul>
  </div>
);
