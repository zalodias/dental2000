export interface RichText {
  type: string;
  text: {
    content: string;
    link?: string | undefined;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
}

export interface Block {
  id: string;
  type: string;
  content: RichText[];
  language?: string;
  image?: string;
}
