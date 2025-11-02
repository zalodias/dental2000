'use client';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className="border-border-neutral-default placeholder:text-foreground-neutral-faded text-title-small focus:border-border-neutral-strong [field-sizing:content] overflow-clip border-b px-2 py-4 transition-colors duration-200 focus:outline-none"
      onInput={(e) => {
        e.currentTarget.style.height = '';
        e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
      }}
      {...props}
    />
  );
}
