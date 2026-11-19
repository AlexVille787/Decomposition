import React from "react";
import { NavItem } from "../types";

interface SearchNavProps {
  items: NavItem[];
}

/**
 * Навигационное меню над поисковой строкой.
 *
 * @remarks
 * Выводит список ссылок на сервисы (Видео, Картинки, Новости и т.д.).
 * Позволяет гибко настраивать набор ссылок через пропс `items`.
 *
 * @param props - Объект с пропсами компонента
 * @param props.items - Массив навигационных ссылок (label и href)
 *
 * @example
 * ```tsx
 * <SearchNav items={[{ id: 1, label: 'Видео', href: '#' }]} />
 * ```
 */
export const SearchNav: React.FC<SearchNavProps> = ({ items }) => (
  <nav className="search-nav">
    {items.map((item) => (
      <a key={item.id} href={item.href} className="search-nav__link">
        {item.label}
      </a>
    ))}
    <a href="#" className="search-nav__more">
      ещё
    </a>
  </nav>
);
