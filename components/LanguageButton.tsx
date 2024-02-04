"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks: { value: Language; label: string }[] = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "cn",
    label: "Chinese",
  },
  {
    value: "malay",
    label: "Malay",
  },
  {
    value: "tamil",
    label: "Tamil",
  },
];

type Language = "en" | "cn" | "malay" | "tamil";

interface LanguageButtonProps {
  onLanguageChange: (language: Language) => void;
}

export function LanguageButton({ onLanguageChange }: LanguageButtonProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleSelect = (currentValue: Language) => {
    setValue(currentValue);
    setOpen(false);
    onLanguageChange(currentValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Language..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={() => handleSelect(framework.value)}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
