"use client";

interface LeafElementProps {
  attributes: any;
  children: React.ReactNode;
  leaf: {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    text: string;
  };
}

export function LeafElement({ attributes, children, leaf }: LeafElementProps) {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  return <span {...attributes}>{children}</span>;
}