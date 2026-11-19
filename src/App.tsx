import { NewsList } from "./components/NewsList";
import { Currencies, CurrencyData } from "./components/Currencies";
import { SearchNav } from "./components/SearchNav";
import { SearchBar } from "./components/SearchBar";
import { Banner } from "./components/Banner";
import { Weather } from "./components/Weather";
import { TvGuide } from "./components/TvGuide";
import { Visited } from "./components/Visited";
import { MapBlock } from "./components/MapBlock";
import { ErrorPromo } from "./components/ErrorPromo";
import { Broadcast } from "./components/Broadcast";
import {
  NewsItem,
  NavItem,
  TvProgram,
  WeatherInfo,
  VisitItem,
  BroadcastItem,
} from "./types";
import "./App.css";

/** Моковые данные для новостей */
const mockNews: NewsItem[] = [
  {
    id: 1,
    icon: "🌐",
    text: "Путин упростил получение автомобильных номеров",
    link: "#",
  },
  {
    id: 2,
    icon: "🌐",
    text: "В команде Зеленского раскрыли план реформ на Украине",
    link: "#",
  },
  {
    id: 3,
    icon: "📺",
    text: "«Турпомощь» прокомментировала гибель десятков россиян в Анталье",
    link: "#",
  },
  {
    id: 4,
    icon: "⚖️",
    text: "Суд закрыл дело Демпартии США против России",
    link: "#",
  },
  {
    id: 5,
    icon: "🚀",
    text: "На Украине призвали создать ракеты для удара по Москве",
    link: "#",
  },
];

/** Моковые данные для курсов валют */
const mockCurrencies: CurrencyData[] = [
  {
    id: 1,
    label: "USD MOEX",
    value: "63,52",
    change: "+0,09",
    isPositive: true,
  },
  {
    id: 2,
    label: "EUR MOEX",
    value: "70,86",
    change: "+0,14",
    isPositive: true,
  },
  { id: 3, label: "НЕФТЬ", value: "64,90", change: "+1,63%", isPositive: true },
];

/** Моковые данные для навигационного меню */
const mockNavItems: NavItem[] = [
  { id: 1, label: "Видео", href: "#" },
  { id: 2, label: "Картинки", href: "#" },
  { id: 3, label: "Новости", href: "#" },
  { id: 4, label: "Карты", href: "#" },
  { id: 5, label: "Маркет", href: "#" },
  { id: 6, label: "Переводчик", href: "#" },
  { id: 7, label: "Эфир", href: "#" },
];

/** Моковые данные для телепрограммы */
const mockTv: TvProgram[] = [
  { id: 1, time: "02:00", title: "THT. Best", channel: "THT International" },
  { id: 2, time: "02:15", title: "Джинглики", channel: "Карусель INT" },
  { id: 3, time: "02:25", title: "Наедине со всеми", channel: "Первый" },
];

/** Моковые данные для блока "Посещаемое" */
const mockVisited: VisitItem[] = [
  { id: 1, title: "Недвижимость", description: "о сталинках", href: "#" },
  { id: 2, title: "Маркет", description: "люстры и светильники", href: "#" },
  { id: 3, title: "Авто.ру", description: "привод 4х4 до 500 000", href: "#" },
];

/** Моковые данные для погоды */
const mockWeather: WeatherInfo = {
  temp: "+17°",
  morning: "+17,",
  day: "+20",
  icon: "🌧️",
};

/** Моковые данные для блока "Эфир" */
const mockBroadcast: BroadcastItem[] = [
  { id: 1, icon: "▶️", title: "Управление как искусство", channel: "Успех" },
  { id: 2, icon: "▶️", title: "Ночь. Мир в это время", channel: "earthTV" },
  {
    id: 3,
    icon: "▶️",
    title: "Андрей Возн...",
    channel: "Совершенно секретно",
  },
];

function App() {
  return (
    <div className="app-container">
      {/* Верхний блок: Новости + Промо */}
      <div className="top-section">
        <div className="top-section__main">
          <NewsList
            title="Сейчас в СМИ"
            subtitle="в Германии"
            time="31 июля, среда 02:32"
            news={mockNews}
          />
          <Currencies items={mockCurrencies} />
        </div>
        <div className="top-section__side">
          <ErrorPromo />
        </div>
      </div>

      {/* Секция поиска */}
      <div className="search-section">
        <SearchNav items={mockNavItems} />
        <SearchBar />
        <Banner text="Форсаж: Хоббс и Шоу. В кино с 1 августа" />
      </div>

      {/* Нижний блок: Колонки */}
      <div className="bottom-section">
        <div className="bottom-column">
          <Weather info={mockWeather} />
          <Visited items={mockVisited} />
        </div>
        <div className="bottom-column">
          <MapBlock />
          <TvGuide programs={mockTv} />
        </div>
        <div className="bottom-column">
          <Broadcast items={mockBroadcast} />
        </div>
      </div>
    </div>
  );
}

export default App;
