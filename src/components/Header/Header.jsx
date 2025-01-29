import { PopoverGroup } from "@headlessui/react";

export default function Header() {
  return (
    <header className="bg-purple">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Fergus Gildea</span>
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm/6 font-semibold text-gray-900">
            Home
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            About
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Contact
          </a>
        </PopoverGroup>
      </nav>
    </header>
  );
}
