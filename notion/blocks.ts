import { Block, RichText } from '@/notion/types';
import {
  BlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

function processRichText(richText: RichTextItemResponse[]): RichText[] {
  return richText.map((text) => ({
    type: text.type,
    text: {
      content: text.plain_text,
      link: text.href ?? undefined,
    },
    annotations: {
      bold: text.annotations.bold,
      italic: text.annotations.italic,
      strikethrough: text.annotations.strikethrough,
      underline: text.annotations.underline,
      code: text.annotations.code,
      color: text.annotations.color,
    },
  }));
}

export function processBlock(block: BlockObjectResponse): Block | null {
  try {
    switch (block.type) {
      case 'paragraph':
        return {
          id: block.id,
          type: 'paragraph',
          content: processRichText(block.paragraph.rich_text),
        };

      case 'heading_1':
        return {
          id: block.id,
          type: 'heading_1',
          content: processRichText(block.heading_1.rich_text),
        };

      case 'heading_2':
        return {
          id: block.id,
          type: 'heading_2',
          content: processRichText(block.heading_2.rich_text),
        };

      case 'heading_3':
        return {
          id: block.id,
          type: 'heading_3',
          content: processRichText(block.heading_3.rich_text),
        };

      case 'bulleted_list_item':
        return {
          id: block.id,
          type: 'bulleted_list_item',
          content: processRichText(block.bulleted_list_item.rich_text),
        };

      case 'numbered_list_item':
        return {
          id: block.id,
          type: 'numbered_list_item',
          content: processRichText(block.numbered_list_item.rich_text),
        };

      case 'quote':
        return {
          id: block.id,
          type: 'quote',
          content: processRichText(block.quote.rich_text),
        };

      case 'callout':
        return {
          id: block.id,
          type: 'callout',
          content: processRichText(block.callout.rich_text),
        };

      case 'divider':
        return {
          id: block.id,
          type: 'divider',
          content: [],
        };

      case 'image':
        return {
          id: block.id,
          type: 'image',
          content: [],
          image: {
            type: block.image.type,
            external:
              block.image.type === 'external'
                ? block.image.external
                : undefined,
            file: block.image.type === 'file' ? block.image.file : undefined,
            caption: block.image.caption
              ? processRichText(block.image.caption)
              : undefined,
          },
        };

      case 'toggle':
        return {
          id: block.id,
          type: 'toggle',
          content: processRichText(block.toggle.rich_text),
        };

      case 'column_list':
        return {
          id: block.id,
          type: 'column_list',
          content: [],
        };

      case 'column':
        return {
          id: block.id,
          type: 'column',
          content: [],
        };

      default:
        console.warn(`Unsupported block type: ${block.type}`);
        return null;
    }
  } catch (error) {
    console.error(`Error processing block ${block.id}:`, error);
    return null;
  }
}
