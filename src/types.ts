// src/types.ts

export interface NewsItem {
  id: number;
  icon: string;
  text: string;
  link: string;
}

export interface NavItem {
  id: number;
  label: string;
  href: string;
}

export interface TvProgram {
  id: number;
  time: string;
  title: string;
  channel: string;
}

export interface WeatherInfo {
  temp: string;
  morning: string;
  day: string;
  icon: string;
}

export interface VisitItem {
  id: number;
  title: string;
  description: string;
  href: string;
}

export interface BroadcastItem {
  id: number;
  title: string;
  channel: string;
  icon: string;
}
