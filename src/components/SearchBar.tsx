import React from "react";

interface SearchBarProps {
  logoText?: string;
  placeholder?: string;
  buttonText?: string;
  hint?: string;
}

/**
 * Компонент поисковой строки с логотипом, полем ввода и кнопкой.
 *
 * @remarks
 * Используется на главной странице для поиска. Все текстовые элементы
 * настраиваются через пропсы, что позволяет переиспользовать компонент
 * в разных контекстах (например, на других страницах).
 *
 * @param props - Объект с пропсами компонента
 * @param props.logoText - Текст логотипа (по умолчанию "Яндекс")
 * @param props.placeholder - Плейсхолдер поля ввода (по умолчанию пустая строка)
 * @param props.buttonText - Текст кнопки поиска (по умолчанию "Найти")
 * @param props.hint - Текст подсказки под строкой поиска
 *
 * @example
 * ```tsx
 * <SearchBar logoText="МойПоиск" buttonText="Искать" />
 * ```
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  logoText = "Яндекс",
  placeholder = "",
  buttonText = "Найти",
  hint = "Найдётся всё. Например, фаза луны сегодня",
}) => (
  <div className="search-bar">
    <div className="search-bar__logo">{logoText}</div>
    <div className="search-bar__input-wrapper">
      <input
        type="text"
        placeholder={placeholder}
        className="search-bar__input"
      />
      <button className="search-bar__button">{buttonText}</button>
    </div>
    <div className="search-bar__hint">{hint}</div>
  </div>
);
