"use client";

import { CustomElement } from '../types';

interface BlockElementProps {
  attributes: any;
  children: React.ReactNode;
  element: CustomElement;
}

export function BlockElement({ attributes, children, element }: BlockElementProps) {
  switch (element.type) {
    case 'heading-one':
      return <h1 {...attributes} className="text-4xl font-bold mb-4">{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes} className="text-3xl font-bold mb-3">{children}</h2>;
    case 'heading-three':
      return <h3 {...attributes} className="text-2xl font-bold mb-2">{children}</h3>;
    case 'block-quote':
      return <blockquote {...attributes} className="border-l-4 border-primary pl-4 italic">{children}</blockquote>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'bulleted-list':
      return <ul {...attributes} className="list-disc list-inside mb-4">{children}</ul>;
    case 'numbered-list':
      return <ol {...attributes} className="list-decimal list-inside mb-4">{children}</ol>;
    default:
      return <p {...attributes} className="mb-4">{children}</p>;
  }
}