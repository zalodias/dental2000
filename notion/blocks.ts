import type { Block, RichText } from '@/notion/types';
import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

type BlockWithChildren = BlockObjectResponse & {
  children?: BlockWithChildren[];
};

function transformRichTextItem(text: {
  plain_text: string;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
  };
  href: string | null;
}): RichText {
  return {
    text: { content: text.plain_text },
    annotations: {
      bold: text.annotations.bold,
      italic: text.annotations.italic,
      strikethrough: text.annotations.strikethrough,
      underline: text.annotations.underline,
      code: text.annotations.code,
    },
    link: text.href ? { url: text.href } : undefined,
  };
}

function extractRichText(block: BlockObjectResponse): RichText[] {
  let richText: Array<{
    plain_text: string;
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
    };
    href: string | null;
  }> = [];

  switch (block.type) {
    case 'paragraph':
      richText = block.paragraph.rich_text;
      break;
    case 'heading_1':
      richText = block.heading_1.rich_text;
      break;
    case 'heading_2':
      richText = block.heading_2.rich_text;
      break;
    case 'heading_3':
      richText = block.heading_3.rich_text;
      break;
    case 'bulleted_list_item':
      richText = block.bulleted_list_item.rich_text;
      break;
    case 'numbered_list_item':
      richText = block.numbered_list_item.rich_text;
      break;
    case 'to_do':
      richText = block.to_do.rich_text;
      break;
    case 'toggle':
      richText = block.toggle.rich_text;
      break;
    case 'quote':
      richText = block.quote.rich_text;
      break;
    case 'code':
      richText = block.code.rich_text;
      break;
  }

  return richText.map(transformRichTextItem);
}

export function processBlockFromResponse(block: BlockWithChildren): Block {
  const processed: Block = {
    id: block.id,
    type: block.type,
    content: extractRichText(block),
  };

  if ('code' in block && block.code) {
    processed.language = block.code.language || 'plaintext';
  }

  if ('image' in block && block.image) {
    if ('file' in block.image && block.image.file) {
      processed.image = block.image.file.url;
    } else if ('external' in block.image && block.image.external) {
      processed.image = block.image.external.url;
    }
  }

  return processed;
}

export function processBlocks(blocks: BlockWithChildren[]): Block[] {
  return blocks.map((block) => processBlockFromResponse(block));
}
