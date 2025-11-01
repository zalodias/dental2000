interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className="border-border-neutral-default focus:border-border-neutral-strong border-b px-2 py-4 transition-colors duration-200 focus:outline-none"
      {...props}
    />
  );
}
