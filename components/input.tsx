interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className="border-border-neutral-default focus:border-border-neutral-strong border-b px-2 py-4 transition-colors duration-200 focus:outline-none"
      {...props}
    />
  );
}
