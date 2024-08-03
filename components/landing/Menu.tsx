import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MenuIcon } from "lucide-react";

const Menu = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-4 rounded-xl bg-navy-700 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
        Menu
        <MenuIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle></DialogTitle>
        <div>
          <ul className="flex items-center flex-col gap-4">
            <li className="text-[27px]">
              <a href="#">Home</a>
            </li>
            <li className="text-[27px]">
              <a href="#">About</a>
            </li>
            <li className="text-[27px]">
              <a href="#">Projects</a>
            </li>
            <li className="text-[27px]">
              <a href="#">Testimonials</a>
            </li>
            <li className="text-[27px]">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Menu;
