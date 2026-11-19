import React from "react";

interface ErrorPromoProps {
  iconText?: string;
  title?: string;
  description?: string;
  href?: string;
}

/**
 * Промо-блок "Работа над ошибками".
 *
 * @remarks
 * Отображает круглую иконку, заголовок и описание с возможностью перехода по ссылке.
 * Все тексты настраиваются через пропсы.
 *
 * @param props - Объект с пропсами компонента
 * @param props.iconText - Текст внутри иконки (по умолчанию "wa/wa")
 * @param props.title - Заголовок промо (по умолчанию "Работа над ошибками")
 * @param props.description - Описание (по умолчанию "Смотрите на Яндексе и запоминайте")
 * @param props.href - Ссылка для перехода
 *
 * @example
 * ```tsx
 * <ErrorPromo title="Работа над ошибками" href="#" />
 * ```
 */
export const ErrorPromo: React.FC<ErrorPromoProps> = ({
  iconText = "wa/wa",
  title = "Работа над ошибками",
  description = "Смотрите на Яндексе и запоминайте",
  href = "#",
}) => (
  <div className="error-promo">
    <div className="error-promo__icon">{iconText}</div>
    <a href={href} className="error-promo__title">
      {title}
    </a>
    <p className="error-promo__description">{description}</p>
  </div>
);
