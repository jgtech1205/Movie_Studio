import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

  import { ChevronDown } from "lucide-react";

  const GenreDropDown = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex items-center text-sm font-medium">
          Genre <ChevronDown className= "ml-1" size={20}/>
        </DropdownMenuTrigger>
      </DropdownMenu>
    );
  };
  
  export default GenreDropDown;
  