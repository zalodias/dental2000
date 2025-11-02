interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className="border-border-neutral-default text-title-small focus:border-border-neutral-strong border-b px-2 py-4 transition-colors duration-200 focus:outline-none"
      {...props}
    >
      {children}
    </select>
  );
}
