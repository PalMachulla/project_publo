"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FileText,
  FolderOpen,
  History,
  Search,
  Settings,
  Users,
} from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-[60px] border-r bg-card flex flex-col items-center py-4">
      <Button variant="ghost" size="icon" className="mb-2">
        <FileText className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="mb-2">
        <FolderOpen className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="mb-2">
        <Search className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="mb-2">
        <History className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="mb-2">
        <Users className="w-5 h-5" />
      </Button>
      <div className="flex-1" />
      <Button variant="ghost" size="icon">
        <Settings className="w-5 h-5" />
      </Button>
    </div>
  );
}