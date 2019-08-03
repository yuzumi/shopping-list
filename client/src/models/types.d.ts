declare module 'Models' {
  export interface Item {
    _id: string;
    name: string;
    date: Date;
  }

  export type ItemList = Item[];
}
