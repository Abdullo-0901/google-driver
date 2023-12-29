"use client";
import { FileUp, Folder } from "lucide-react";
import { Separator } from "../ui/separator";
import { useFolder } from "@/hooks/use-folder";
import React, { ElementRef, useRef } from "react";

const PopoverActions = () => {
  const { onOpen } = useFolder();
  const inputRef = useRef<ElementRef<"input">>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
  };

  return (
    <>
      <div
        className=" flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm cursor-pointer"
        onClick={onOpen}
      >
        <Folder className="w-4 h-4" />
        <span>New folder</span>
      </div>
      <Separator />
      <label>
        <div className=" flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm cursor-pointer">
          <FileUp className="w-4 h-4" />
          <span>File upload</span>
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          ref={inputRef}
          onChange={onChange}
        />
      </label>
      <label>
        <div className=" flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm cursor-pointer">
          <Folder className="w-4 h-4" />
          <span>Folder upload</span>
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          ref={inputRef}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default PopoverActions;
