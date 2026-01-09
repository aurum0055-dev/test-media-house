
export enum AppSection {
  HOME = 'home',
  NEWS = 'news',
  SPORT = 'sport',
  WEATHER = 'weather',
  IPLAYER = 'iPlayer',
  BITESIZE = 'bitesize'
}

export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  rating: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  time: string;
  category: string;
  image: string;
}

export interface LeaguePosition {
  pos: number;
  team: string;
  short: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  for: number;
  against: number;
  gd: number;
  pts: number;
  form: ('W' | 'D' | 'L')[];
}
