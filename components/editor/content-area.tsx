"use client";

import { Editable, Slate } from 'slate-react';
import { useEditor } from '@/lib/editor/hooks/use-editor';
import { useHotkeys } from '@/lib/editor/hooks/use-hotkeys';
import { BlockElement } from '@/lib/editor/elements/block-element';
import { LeafElement } from '@/lib/editor/elements/leaf-element';

export function ContentArea() {
  const { editor, value, onChange } = useEditor();
  const handleHotkeys = useHotkeys(editor);

  const renderElement = (props: any) => <BlockElement {...props} />;
  const renderLeaf = (props: any) => <LeafElement {...props} />;

  return (
    <div className="flex-1 overflow-auto bg-background">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <Slate editor={editor} value={value} onChange={onChange}>
          <Editable
            className="min-h-[calc(100vh-12rem)] outline-none prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none"
            placeholder="Start typing..."
            onKeyDown={handleHotkeys}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
          />
        </Slate>
      </div>
    </div>
  );
}