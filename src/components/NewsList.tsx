import React from "react";
import { NewsItem } from "../types";

interface NewsListProps {
  title: string;
  subtitle?: string;
  time?: string;
  news: NewsItem[];
}

/**
 * Отображает блок новостей с заголовком, подзаголовком, временем и списком.
 *
 * @remarks
 * Компонент используется для отображения ленты новостей "Сейчас в СМИ".
 * Позволяет гибко настраивать заголовок и передавать массив новостей.
 *
 * @param props - Объект с пропсами компонента
 * @param props.title - Основной заголовок блока (например, "Сейчас в СМИ")
 * @param props.subtitle - Дополнительный подзаголовок (например, "в Германии")
 * @param props.time - Время обновления новостей (например, "31 июля, среда 02:32")
 * @param props.news - Массив объектов с новостями (иконка, текст, ссылка)
 *
 * @example
 * ```tsx
 * <NewsList
 *   title="Сейчас в СМИ"
 *   subtitle="в Германии"
 *   news={[{ id: 1, icon: '🌐', text: 'Новость', link: '#' }]}
 * />
 * ```
 */
export const NewsList: React.FC<NewsListProps> = ({
  title,
  subtitle,
  time,
  news,
}) => (
  <div className="news-list">
    <div className="news-list__header">
      <h2>{title}</h2>
      {subtitle && <span className="news-list__subtitle">{subtitle}</span>}
      {time && <span className="news-list__time">{time}</span>}
    </div>
    <ul className="news-list__items">
      {news.map((item) => (
        <li key={item.id} className="news-item">
          <span className="news-item__icon">{item.icon}</span>
          <a href={item.link} className="news-item__text">
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
