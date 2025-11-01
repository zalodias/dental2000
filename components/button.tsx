import { mergeTailwindClassNames as cn } from '@/utils/tailwind';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(
  'inline-flex w-fit cursor-pointer items-center justify-center rounded-full font-medium whitespace-nowrap',
  {
    variants: {
      variant: {
        default:
          'bg-background-neutral-inverse text-foreground-neutral-inverse',
        inverse:
          'bg-background-neutral-default text-foreground-neutral-default',
      },
      size: {
        default: 'px-5 py-2',
        large: 'px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof button> & {
    asChild?: boolean;
  }) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      data-slot="button"
      className={cn(button({ variant, size, className }))}
      {...props}
    />
  );
}
