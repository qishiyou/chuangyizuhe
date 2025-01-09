export interface Word {
  text: string;
  size: number;
  x: number;
  y: number;
}

export interface Connection {
  start: Word;
  end: Word;
}

export interface Theme {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
}