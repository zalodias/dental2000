import { Block, RichText } from '@/notion/types';
import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

interface NotionBlockProps {
  blocks?: Block[];
  block?: Block;
}

export function NotionBlock({ block, blocks }: NotionBlockProps) {
  if (block) return renderBlock(block);
  if (blocks) return renderBlocks(blocks);

  return null;
}

function renderRichText(richText: RichText[]) {
  return richText.map((text, index) => {
    const content = text.text.content;
    const link = text.text.link;
    const annotations = text.annotations;

    let element: ReactNode = content;

    if (link) {
      element = (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-body"
          title={link}
        >
          {content}
        </a>
      );
    }

    if (annotations.bold) element = <strong key={index}>{element}</strong>;
    if (annotations.italic) element = <em key={index}>{element}</em>;
    if (annotations.strikethrough) element = <s key={index}>{element}</s>;
    if (annotations.underline) element = <u key={index}>{element}</u>;
    if (annotations.code)
      element = (
        <code className="bg-tertiary rounded px-1 py-0.5 text-sm" key={index}>
          {element}
        </code>
      );

    return element;
  });
}

function renderBlock(block: Block): ReactNode {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          key={block.id}
          className="text-title-small text-foreground-neutral-default"
        >
          {renderRichText(block.content)}
        </p>
      );
    case 'heading_1':
      return (
        <h1
          key={block.id}
          className="text-display-medium text-foreground-neutral-default mt-6 font-medium"
        >
          {renderRichText(block.content)}
        </h1>
      );
    case 'heading_2':
      return (
        <h2
          key={block.id}
          className="text-display-small text-foreground-neutral-default mt-5 font-medium"
        >
          {renderRichText(block.content)}
        </h2>
      );
    case 'heading_3':
      return (
        <h3
          key={block.id}
          className="text-title-small text-foreground-neutral-default mt-4 font-medium"
        >
          {renderRichText(block.content)}
        </h3>
      );
    case 'image':
      const src =
        block.image?.type === 'external'
          ? block.image?.external?.url
          : block.image?.file?.url;
      return (
        <figure key={block.id} className="mt-8 mb-4 grid items-center gap-3">
          <img
            src={src}
            loading="lazy"
            decoding="async"
            alt={
              block.image?.caption
                ? block.image?.caption[0]?.text.content
                : 'Image'
            }
          />
          {block.image?.caption && block.image?.caption[0]?.text.content && (
            <figcaption className="text-body-medium text-foreground-neutral-subtle text-center">
              {block.image?.caption[0].text.content}
            </figcaption>
          )}
        </figure>
      );
    case 'bulleted_list_item':
      return (
        <li key={block.id} className="text-title-small ps-1">
          {renderRichText(block.content)}
        </li>
      );
    case 'numbered_list_item':
      return (
        <li key={block.id} className="text-title-small ps-1">
          {renderRichText(block.content)}
        </li>
      );
    case 'callout':
      return (
        <div
          key={block.id}
          className="bg-background-neutral-faded flex flex-col gap-2 px-6 py-5 [&_:is(h1,h2,h3)]:m-0"
        >
          {renderRichText(block.content)}
          {block.children?.map((child: Block) => (
            <NotionBlock key={child.id} block={child} />
          ))}
        </div>
      );
    case 'divider':
      return (
        <hr key={block.id} className="border-border-neutral-default my-4" />
      );
    case 'quote':
      return (
        <blockquote
          key={block.id}
          className="border-l-foreground-neutral-default text-foreground-neutral-default my-3 border-l-2 pl-4 font-serif italic"
        >
          {renderRichText(block.content)}
        </blockquote>
      );
    case 'toggle':
      return (
        <details
          key={block.id}
          className="group border-b-border-neutral-default mt-4 border-b py-4 first-of-type:mt-0"
        >
          <summary className="text-title-small mb-2 flex cursor-pointer items-center gap-2 font-medium">
            <div className="grow">{renderRichText(block.content)}</div>
            <div className="p-0.5 transition group-open:rotate-90">
              <ChevronRight size={20} />
            </div>
          </summary>
          {block.children?.map((child: Block) => (
            <NotionBlock key={child.id} block={child} />
          ))}
        </details>
      );
    case 'column_list':
      return (
        <div
          key={block.id}
          className="my-4 flex flex-col gap-4 md:flex-row md:gap-6"
        >
          {block.children?.map((child: Block) => (
            <NotionBlock key={child.id} block={child} />
          ))}
        </div>
      );
    case 'column':
      return (
        <div key={block.id} className="flex-1 space-y-2">
          {block.children?.map((child: Block) => (
            <NotionBlock key={child.id} block={child} />
          ))}
        </div>
      );
    default:
      return null;
  }
}

function renderBlocks(blocks: Block[]): ReactNode {
  const result: ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    if (block.type === 'bulleted_list_item') {
      const listItems: ReactNode[] = [];
      const startIndex = i;

      while (i < blocks.length && blocks[i].type === 'bulleted_list_item') {
        listItems.push(renderBlock(blocks[i]));
        i++;
      }

      result.push(
        <ul
          key={blocks[startIndex].id}
          className="ml-6 flex list-disc flex-col gap-2"
        >
          {listItems}
        </ul>,
      );
      continue;
    }

    if (block.type === 'numbered_list_item') {
      const listItems: ReactNode[] = [];
      const startIndex = i;

      while (i < blocks.length && blocks[i].type === 'numbered_list_item') {
        listItems.push(renderBlock(blocks[i]));
        i++;
      }

      result.push(
        <ol
          key={blocks[startIndex].id}
          className="ml-6 flex list-decimal flex-col gap-2"
        >
          {listItems}
        </ol>,
      );
      continue;
    }

    if (block.type === 'toggle') {
      const accordionItems: ReactNode[] = [];
      const startIndex = i;

      while (i < blocks.length && blocks[i].type === 'toggle') {
        accordionItems.push(renderBlock(blocks[i]));
        i++;
      }

      result.push(<div key={blocks[startIndex].id}>{accordionItems}</div>);
      continue;
    }

    result.push(renderBlock(block));
    i++;
  }

  return result;
}
