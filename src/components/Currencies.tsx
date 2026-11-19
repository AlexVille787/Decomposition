import React from "react";

export interface CurrencyData {
  id: number;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface CurrenciesProps {
  items: CurrencyData[];
}

/**
 * Отображает строку с текущими котировками валют и нефти.
 *
 * @remarks
 * Компонент принимает массив валют и выводит их в виде строки с указанием изменений.
 * Положительные изменения подсвечиваются зеленым, отрицательные — красным.
 *
 * @param props - Объект с пропсами компонента
 * @param props.items - Массив объектов с данными о валютах (название, значение, изменение)
 *
 * @example
 * ```tsx
 * <Currencies
 *   items={[
 *     { id: 1, label: 'USD MOEX', value: '63,52', change: '+0,09', isPositive: true }
 *   ]}
 * />
 * ```
 */
export const Currencies: React.FC<CurrenciesProps> = ({ items }) => (
  <div className="currencies">
    {items.map((item) => (
      <div key={item.id} className="currency-item">
        <span className="currency-item__label">{item.label}</span>
        <span className="currency-item__value">{item.value}</span>
        <span
          className={`currency-item__change ${item.isPositive ? "positive" : "negative"}`}
        >
          {item.change}
        </span>
      </div>
    ))}
    <span className="currencies__more">...</span>
  </div>
);
