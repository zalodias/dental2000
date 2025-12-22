export interface RichText {
  text: {
    content: string;
  };
  annotations: {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
  };
  link?: {
    url: string;
  };
}

export interface Block {
  id: string;
  type: string;
  content: RichText[];
  language?: string;
  image?: string;
}
