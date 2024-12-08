"use client";

import { useDocumentTitle } from "@/lib/editor/hooks/use-document-title";
import { useAutosave } from "@/lib/editor/hooks/use-autosave";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, Share2, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DocumentHeader() {
  const { title, setTitle } = useDocumentTitle();
  const { saveContent } = useAutosave([]);

  return (
    <div className="flex items-center justify-between px-6 py-3 border-b bg-card">
      <div className="flex items-center gap-4">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-lg font-medium bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-secondary/50 w-[300px]"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={saveContent}>
          <Save className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Share2 className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
          <AvatarFallback>
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}