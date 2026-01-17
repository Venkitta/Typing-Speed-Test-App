"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const DropdownMenu = ({options, defaultValue}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue)
    
    return (
        <div className="relative text-xl">
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="flex items-center justify-center gap-2 bg-transparent border border-[hsl(240,1%,59%)] w-43 h-9 rounded-md text-white">
                    <span>{options.find(opt => opt.value === selected)?.label}</span>
                    <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-2 w-43 left-1/2 -translate-x-1/2 bg-[hsl(240,5%,15%)] rounded-md shadow-lg overflow-hidden border border-white/10">
                    {options.map((option) => {
                        return <div key={option.value}
                                    onClick={() => {
                                        setSelected(option.value);
                                        setIsOpen(false);
                                    }} className="flex items-center justify-center px-4 py-3 cursor-pointer hover:bg-white/10 border-b border-[hsl(240,1%,59%)] last:border-b-0 text-white text-xl gap-3"
                                >
                                    {selected === option.value ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="hsl(214, 100%, 55%)" class="bi bi-record-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                        </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                      </svg>} 
                                    <span className="flex-1 text-left">{option.label}</span>
                        </div>
                    })}
                </div>
            )}
        </div>
    )
}