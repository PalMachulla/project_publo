'use client';

import React from 'react';
import { createEditor, BaseEditor, Descendant } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
import { DocumentHeader } from "@/components/editor/document-header";
import { Toolbar } from "@/components/editor/toolbar";
import { Sidebar } from "@/components/editor/sidebar";
import { withHistory, HistoryEditor } from 'slate-history';

type CustomElement = { type: 'paragraph'; children: { text: string }[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph' as const,
    children: [{ text: '' }],
  },
];

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong with the editor.</div>;
    }
    return this.props.children;
  }
}

const Home = () => {
  const [editor] = React.useState(() => withHistory(withReact(createEditor())));
  const [value, setValue] = React.useState<Descendant[]>(initialValue);

  return (
    <ErrorBoundary>
      <main className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <DocumentHeader />
          <Slate 
            editor={editor} 
            initialValue={initialValue}
            onChange={newValue => setValue(newValue)}
          >
            <Toolbar />
            <div className="flex-1 overflow-auto bg-background">
              <div className="max-w-4xl mx-auto py-12 px-6">
                <Editable
                  className="min-h-[calc(100vh-12rem)] outline-none prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none"
                  placeholder="Start typing..."
                />
              </div>
            </div>
          </Slate>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Home;