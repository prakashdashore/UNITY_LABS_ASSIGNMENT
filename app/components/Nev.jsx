"use client";
import React, { useContext, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import { SearchIcon } from "./SearchIcon";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Central } from "./Wrapper";


export default function App() {
  const [searchh, setsearchh] = useState("");
  const router = useRouter();

  const d = useContext(Central)
  const {searchKeyWord, setSearchKeyWord} = d

  const [input, setInput] = useState('')
  const searchHandler = async(e)=>{
    e.preventDefault()
    if(!input  || input.trim().length <=1 ){
       return alert("please enter valid input !!")
    }
    setSearchKeyWord(input)
    setInput('')
    router.push(`/search`)
  }



  return (
    <Navbar className="bg-white overflow-hidden fixed shadow-lg " isBordered>
      <NavbarContent justify="start">
        <Link href="/">
        <NavbarBrand className="mr-4">
          <h1 className="font-extrabold text-[#F80300]">HACKER</h1>
          <Image
            src="/news-logo-removebg-preview.png"
            alt="logo"
            width={60}
            height={50}
            className="cursor-pointer"
          />
        </NavbarBrand>
        </Link>
        <NavbarContent className=" sm:flex gap-3">
         
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="  w-full items-center flex
      " justify="end">
        <form className=" w-full items-center  flex gap-2"  onSubmit={searchHandler}>
          <SearchIcon />
          <Input className="" type="text" placeholder="Search"
          onChange={(e)=>setInput(e.target.value)}
          value={input}
           />
        </form>
      </NavbarContent>
    </Navbar>
  );
}
