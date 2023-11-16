export type TagModel = {
  id: string;
  text: string;
  level: number;
};

export type TodoModel = {
  id: string;
  title: string;
  tags?: Array<TagModel>;
  content: string;
};
