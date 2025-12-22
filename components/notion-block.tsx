import type { Block, RichText } from '@/notion/types';
import type { ReactNode } from 'react';

function renderRichText(content: RichText[]): ReactNode[] {
  return content.map((text, index) => {
    const { annotations, link } = text;
    const content = text.text.content;

    let element: ReactNode = content;

    if (link) {
      element = (
        <a
          key={index}
          href={link.url}
          target="_blank"
          className="text-foreground-brand-default hover:underline hover:underline-offset-2"
          title={link.url}
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
        <code
          key={index}
          className="bg-background-neutral-faded text-body-medium rounded px-2 py-1"
        >
          {element}
        </code>
      );

    return element;
  });
}

function CodeBlock({ code, language }: { code: string; language?: string }) {
  return (
    <div className="bg-background-neutral-faded my-6 overflow-x-auto rounded-lg p-4">
      <pre className="text-body-small font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function renderSingleBlock(
  block: Block,
  isPreview: boolean = false,
): ReactNode {
  if (isPreview) {
    return (
      <p
        key={block.id}
        className="text-body-large text-foreground-neutral-subtle leading-[1.6]"
      >
        {renderRichText(block.content)}
      </p>
    );
  }

  switch (block.type) {
    case 'quote':
      return (
        <blockquote
          key={block.id}
          className="border-border-neutral-default text-body-large text-foreground-neutral-subtle border-l-4 pl-5 leading-[1.6]"
        >
          {renderRichText(block.content)}
        </blockquote>
      );
    case 'paragraph':
      return (
        <p
          key={block.id}
          className="text-body-large text-foreground-neutral-default leading-[1.6]"
        >
          {renderRichText(block.content)}
        </p>
      );
    case 'heading_1':
      return (
        <h1
          key={block.id}
          className="text-display-small text-foreground-neutral-default mt-6 font-sans leading-[1.2] font-bold"
        >
          {renderRichText(block.content)}
        </h1>
      );
    case 'heading_2':
      return (
        <h2
          key={block.id}
          className="text-title-large text-foreground-neutral-default mt-6 font-sans leading-[1.3] font-bold"
        >
          {renderRichText(block.content)}
        </h2>
      );
    case 'heading_3':
      return (
        <h3
          key={block.id}
          className="text-title-medium text-foreground-neutral-default mt-5 font-sans leading-[1.4] font-bold"
        >
          {renderRichText(block.content)}
        </h3>
      );
    case 'bulleted_list_item':
      return (
        <li
          key={block.id}
          className="text-body-large text-foreground-neutral-default leading-[1.6]"
        >
          {renderRichText(block.content)}
        </li>
      );
    case 'numbered_list_item':
      return (
        <li
          key={block.id}
          className="text-body-large text-foreground-neutral-default leading-[1.6]"
        >
          {renderRichText(block.content)}
        </li>
      );
    case 'to_do':
      return (
        <div
          key={block.id}
          className="text-body-large text-foreground-neutral-default flex items-start gap-2 leading-[1.6]"
        >
          <input type="checkbox" disabled className="mt-1" />
          <span>{renderRichText(block.content)}</span>
        </div>
      );
    case 'toggle':
      return (
        <details
          key={block.id}
          className="text-body-large text-foreground-neutral-default leading-[1.6]"
        >
          <summary className="cursor-pointer">
            {renderRichText(block.content)}
          </summary>
        </details>
      );
    case 'code':
      return (
        <CodeBlock
          key={block.id}
          code={block.content.map((text) => text.text.content).join('')}
          language={block.language || 'plaintext'}
        />
      );
    case 'divider':
      return (
        <hr
          key={block.id}
          className="border-border-neutral-default my-6 border-t"
        />
      );
    case 'image':
      if (block.image) {
        return (
          <div key={block.id} className="my-6">
            <img
              src={block.image}
              alt=""
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        );
      }
      return null;
    default:
      return null;
  }
}

export function renderBlocks(
  blocks: Block[],
  isPreview: boolean = false,
): ReactNode[] {
  const result: ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    if (!block) {
      i++;
      continue;
    }

    if (block.type === 'bulleted_list_item' && !isPreview) {
      const listItems: ReactNode[] = [];
      const startIndex = i;

      while (i < blocks.length && blocks[i]?.type === 'bulleted_list_item') {
        listItems.push(renderSingleBlock(blocks[i], isPreview));
        i++;
      }

      if (listItems.length > 0) {
        result.push(
          <ul
            key={`ul-${blocks[startIndex]?.id || i}`}
            className="ml-6 list-disc space-y-2"
          >
            {listItems}
          </ul>,
        );
      }
      continue;
    }

    if (block.type === 'numbered_list_item' && !isPreview) {
      const listItems: ReactNode[] = [];
      const startIndex = i;

      while (i < blocks.length && blocks[i]?.type === 'numbered_list_item') {
        listItems.push(renderSingleBlock(blocks[i], isPreview));
        i++;
      }

      if (listItems.length > 0) {
        result.push(
          <ol
            key={`ol-${blocks[startIndex]?.id || i}`}
            className="ml-6 list-decimal space-y-2"
          >
            {listItems}
          </ol>,
        );
      }
      continue;
    }

    result.push(renderSingleBlock(block, isPreview));
    i++;
  }

  return result;
}
