export interface Item {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
    count: number;
}
type Rating = {
    rate: number;
    count: number;
}
export interface ItemsState {
    items: Item[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | undefined;
  }