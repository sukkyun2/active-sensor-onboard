export type PageProps = {
  index: number;
  total: number;
};

export type PagePropsWithPaginate = {
  index: number;
  total: number;
  paginate: (op: Operation) => void;
};

export type Content = {
  index: number;
  title: string;
  subTitle: string;
  image: string;
};

export enum Operation {
  NEXT = 1,
  PREV = -1,
}
