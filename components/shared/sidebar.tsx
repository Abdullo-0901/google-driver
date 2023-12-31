import { Clock5, Cloud, Plus, Star, Tablet, Trash } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import Item from "./item";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import PopoverActions from "./popover-action";

const Sidebar = () => {
  return (
    <div className="h-[90vh] w-72 top-[10vh] left-0 z-30 fixed bg-[#F6F9FC] dark:bg-[#1F1F1F] border-r">
      <div className="flex flex-col p-3 ">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-fit h-12 rounded-full px-6">
              <Plus />
              <span>New</span>
            </Button>
          </PopoverTrigger>

          <PopoverContent className="p-0 py-2">
            <PopoverActions />
          </PopoverContent>
        </Popover>
        <div>
          <div className="flex flex-col space-y-6 mt-8">
            {sidebarLinks.map((link) => {
              return (
                <Link className="p-[5px]" href={link.path} key={link.path}>
                  <Item icon={link.icon} label={link.label} />
                </Link>
              );
            })}
            <div className="flex flex-col space-y-2 mx-4">
              <Progress className="h-2 " value={30} />
              <span>20 MB of 1.5 GB used</span>
              <Button className="rounded-full" variant={"outline"}>
                Get more storage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const sidebarLinks = [
  {
    label: "My drive",
    icon: Tablet,
    path: "/",
  },
  {
    label: "Starred",
    icon: Star,
    path: "/starred",
  },
  {
    label: "Recent",
    icon: Clock5,
    path: "/recent",
  },
  {
    label: "Trash",
    icon: Trash,
    path: "/trash",
  },
  {
    label: "Storage",
    icon: Cloud,
    path: "/cloud",
  },
];
