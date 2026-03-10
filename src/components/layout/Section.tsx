import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("max-w-7xl mx-auto py:8 md:py-16", className)}>
      {children}
    </section>
  );
}
