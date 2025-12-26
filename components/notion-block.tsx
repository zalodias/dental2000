import React from 'react';

import { ChevronRight } from 'lucide-react';

interface NotionBlock {
  id: string;
  type: string;
  children?: NotionBlock[];
  [key: string]: any;
}

interface NotionBlockProps {
  block: NotionBlock;
}

const renderRichText = (richText: any[]) => {
  return richText.map(({ annotations, text }: any, index: number) => {
    const { bold, italic, strikethrough, underline } = annotations;

    const annotationClassNames = [
      bold ? 'font-medium' : null,
      italic ? 'italic' : null,
      strikethrough ? 'line-through' : null,
      underline ? 'underline' : null,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <React.Fragment key={`${text.content}-${index}`}>
        {text.link ? (
          <a
            key={text.link.url}
            href={text.link.url}
            className="text-body-large-subtle text-foreground-brand-default hover:underline hover:underline-offset-2"
            target="_blank"
          >
            {text.content}
          </a>
        ) : (
          <span className={annotationClassNames || undefined}>
            {text.content}
          </span>
        )}
      </React.Fragment>
    );
  });
};

export function NotionBlock({ block }: NotionBlockProps) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          key={block.id}
          className="text-title-small text-foreground-neutral-default"
        >
          {renderRichText(block.paragraph.rich_text)}
        </p>
      );
    case 'heading_1':
      return (
        <h1
          key={block.id}
          className="text-display-medium text-foreground-neutral-default mt-10 mb-4 font-medium"
        >
          {renderRichText(block.heading_1.rich_text)}
        </h1>
      );
    case 'heading_2':
      return (
        <h2
          key={block.id}
          className="text-display-small text-foreground-neutral-default mt-8 mb-4 font-medium"
        >
          {renderRichText(block.heading_2.rich_text)}
        </h2>
      );
    case 'heading_3':
      return (
        <h3
          key={block.id}
          className="text-title-small text-foreground-neutral-default mt-6 mb-3 font-medium"
        >
          {renderRichText(block.heading_3.rich_text)}
        </h3>
      );
    case 'image':
      const src =
        block.image.type === 'external'
          ? block.image.external.url
          : block.image.file.url;
      return (
        <figure key={block.id} className="mt-8 mb-8 grid items-center gap-3">
          <img
            src={src}
            loading="lazy"
            decoding="async"
            alt={
              block.image.caption
                ? block.image.caption[0]?.text.content
                : 'Image'
            }
          />
          {block.image.caption && block.image.caption[0]?.text.content && (
            <figcaption className="text-body-medium text-foreground-neutral-subtle text-center">
              {block.image.caption[0].text.content}
            </figcaption>
          )}
        </figure>
      );
    case 'bulleted_list_item':
      return (
        <li
          key={block.id}
          className="text-title-small ms-6 list-disc ps-1 in-first-of-type:mt-4 in-last-of-type:mb-4"
        >
          {renderRichText(block.bulleted_list_item.rich_text)}
        </li>
      );
    case 'numbered_list_item':
      return (
        <li key={block.id} className="text-title-small ms-6 list-decimal ps-1">
          {renderRichText(block.numbered_list_item.rich_text)}
        </li>
      );
    case 'callout':
      return (
        <div
          key={block.id}
          className="bg-background-neutral-faded my-3 flex gap-2 rounded-lg px-5 py-4"
        >
          {block.callout.icon && <span>{block.callout.icon.emoji}</span>}
          <div className="grow">{renderRichText(block.callout.rich_text)}</div>
        </div>
      );
    case 'divider':
      return <hr key={block.id} className="border-border-neutral-faded my-2" />;
    case 'quote':
      return (
        <blockquote
          key={block.id}
          className="border-l-foreground-neutral-default text-foreground-neutral-default my-3 border-l-2 pl-4 font-serif italic"
        >
          {renderRichText(block.quote.rich_text)}
        </blockquote>
      );
    case 'toggle':
      return (
        <details className="group mt-4 first-of-type:mt-6">
          <summary className="text-title-small mb-2 flex cursor-pointer items-center gap-2 font-medium">
            <div className="p-0.5 transition group-open:rotate-90">
              <ChevronRight size={20} />
            </div>
            <span>{renderRichText(block.toggle.rich_text)}</span>
          </summary>
          <div className="ms-8">
            {block.children?.map((child: NotionBlock) => (
              <NotionBlock key={child.id} block={child} />
            ))}
          </div>
        </details>
      );
    default:
      if (process.env.NODE_ENV !== 'production') {
        console.log('Unsupported type ' + block?.value?.type);
      }
      return <div />;
  }
}
