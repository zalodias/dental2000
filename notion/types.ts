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
  image?: {
    type: 'external' | 'file';
    external?: { url: string };
    file?: { url: string };
    caption?: RichText[];
  };
  callout?: {
    icon?: {
      type?: string;
      emoji?: string;
    };
    rich_text: RichText[];
  };
  children?: Block[];
}
