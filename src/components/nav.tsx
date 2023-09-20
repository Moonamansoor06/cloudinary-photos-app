"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
    return (
        <div className="hidden flex-col md:flex">
        <div className="border-b ">
          <div className="flex h-16 container mx-auto p-8">Photo Album
            {/* <TeamSwitcher /> */}
            {/* <MainNav className="mx-6" /> */}
            <div className="ml-auto flex items-center space-x-4">
            <Avatar>
  <AvatarImage src="/logo1.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
            </div>
          </div>
          </div>
          
          </div>
    );
}

export default Navbar;