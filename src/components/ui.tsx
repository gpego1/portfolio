import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary" | "secondary"; children: ReactNode };
export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return <a className={`button button--${variant} ${className}`} {...props}>{children}</a>;
}
export function Tag({ children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className="tag" {...props}>{children}</span>;
}
export function Panel({ children, className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`panel ${className}`} {...props}>{children}</div>;
}
