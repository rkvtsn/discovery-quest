export interface Quest {
  title: string;
  description: string;
  number: string;
  link?: Quest | null;
}
