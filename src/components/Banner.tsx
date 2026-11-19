import React from "react";

interface BannerProps {
  text: string;
  href?: string;
}

/**
 * Рекламный баннер с текстом и опциональной ссылкой.
 *
 * @remarks
 * Используется для отображения промо-акций (например, рекламы фильма).
 * Если передан `href`, текст оборачивается в ссылку.
 *
 * @param props - Объект с пропсами компонента
 * @param props.text - Текст баннера
 * @param props.href - Ссылка для перехода (опционально)
 *
 * @example
 * ```tsx
 * <Banner text="Форсаж: Хоббс и Шоу" href="#" />
 * ```
 */
export const Banner: React.FC<BannerProps> = ({ text, href }) => {
  const content = <span className="banner__text">{text}</span>;
  return (
    <div className="banner">
      {href ? <a href={href}>{content}</a> : content}
    </div>
  );
};
