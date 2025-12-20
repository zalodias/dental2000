import { mergeTailwindClassNames as cn } from '@/utils/tailwind';

interface TestimonialCardProps {
  quote: string;
  author: string;
  subtitle: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  subtitle,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'bg-background-neutral-default border-border-neutral-subtle flex flex-col gap-8 border p-8',
        className,
      )}
    >
      <svg
        width="32"
        viewBox="0 0 32 20"
        className="text-foreground-neutral-default/20"
      >
        <path
          d="M7.39199 0C3.32002 0 0 3.21429 0 7.1739C0 10.8385 2.896 13.9053 6.57598 14.3012C6.67203 15.8618 6.104 17.3447 4.86402 18.7189C4.57598 19.0373 4.60801 19.5264 4.944 19.8137C5.096 19.9379 5.27999 20 5.47203 20C5.67203 20 5.87203 19.9301 6.02403 19.7826C6.096 19.7438 6.26402 19.6894 6.36001 19.6506C6.51201 19.5963 6.65601 19.5497 6.752 19.4953C9.97598 17.9115 12.448 15.5668 13.72 12.8959C14.456 11.3432 14.864 9.52641 14.864 7.81832C14.864 7.58541 14.856 7.35245 14.84 7.11955C14.576 3.19098 11.232 0 7.39199 0Z"
          fill="currentColor"
        />
        <path
          d="M24.528 0C20.456 0 17.136 3.21429 17.136 7.1739C17.136 10.8385 20.032 13.9053 23.72 14.3012C23.808 15.8618 23.24 17.3447 22.008 18.7189C21.712 19.0373 21.752 19.5264 22.08 19.8137C22.232 19.9379 22.424 20 22.608 20C22.808 20 23.008 19.9301 23.168 19.7826C23.232 19.7438 23.4 19.6894 23.496 19.6506C23.656 19.5963 23.792 19.5497 23.896 19.4953C27.112 17.9115 29.584 15.5668 30.856 12.8959C31.592 11.3432 32 9.52641 32 7.81832C32 7.58541 31.992 7.35245 31.976 7.11955C31.712 3.19098 28.376 0 24.528 0Z"
          fill="currentColor"
        />
      </svg>
      <blockquote className="text-title-small font-medium">{quote}</blockquote>
      <div className="flex flex-col gap-1">
        <span className="font-medium">{author}</span>
        <div className="text-foreground-neutral-subtle">{subtitle}</div>
      </div>
    </div>
  );
}
