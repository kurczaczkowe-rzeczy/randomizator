export interface ICard {
  body: React.ReactNode;
  cardClass?: string;
  id?: string;
  title?: string | {
    content: string;
    id: string;
  };
}
