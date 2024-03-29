"use client"

import { MenuIcon, ShoppingCartIcon, LogInIcon, HomeIcon, PercentIcon, ListOrderedIcon, LogOutIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const Header = () => {

    const { status, data } = useSession()

    const { products } = useContext(CartContext)

    const cartQuantityItems = products.length

    const handleLoginClick = async () => {
        await signIn()
    }
    const handleLogOutClick = async () => {
        await signOut()
    }

    return (
        <Card className="flex justify-between items-center p-[1.875rem]">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>

                    {
                        status === "authenticated" && data?.user && (
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 py-4">
                                    <Avatar>
                                        <AvatarFallback>
                                            {data.user.name?.[0].toUpperCase()}
                                        </AvatarFallback>
                                        {
                                            data.user.image && (
                                                <AvatarImage src={data.user.image} />
                                            )
                                        }
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <p className="font-medium">{data.user.name}</p>
                                        <p className="text-sm opacity-75">Boas compras!</p>
                                    </div>
                                </div>
                                <Separator />
                            </div>
                        )
                    }

                    <div className="mt-4 flex flex-col gap-2">

                        {
                            status === "unauthenticated" && (
                                <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2"><LogInIcon size={16} />Fazer Login</Button>
                            )
                        }
                        {
                            status === "authenticated" && (
                                <Button onClick={handleLogOutClick} variant="outline" className="w-full justify-start gap-2"><LogOutIcon size={16} />Fazer Logout</Button>
                            )
                        }

                        <SheetClose asChild>
                            <Link href="/">
                                <Button variant="outline" className="w-full justify-start gap-2"><HomeIcon size={16} />Inicio</Button>
                            </Link>
                        </SheetClose>
                        {
                            status === "authenticated" && (
                                <SheetClose asChild>
                                    <Link href="/order">
                                        <Button variant="outline" className="w-full justify-start gap-2"><ListOrderedIcon size={16} />Meus Pedidos</Button>
                                    </Link>
                                </SheetClose>
                            )
                        }
                        <SheetClose asChild>
                            <Link href="/offers">
                                <Button variant="outline" className="w-full justify-start gap-2"><PercentIcon size={16} />Ofertas</Button>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href="/catalog">
                                <Button variant="outline" className="w-full justify-start gap-2"><ListOrderedIcon size={16} />Catálogo</Button>
                            </Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
            <h1 className="text-lg font-semibold">:::: EASY STORE ::::</h1>


            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="relative">
                        {cartQuantityItems > 0 && (
                            <span className="absolute right-[calc(-1.25rem/2)] top-[calc(-1.25rem/2)] flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-sm font-bold">
                                {cartQuantityItems}
                            </span>
                        )}
                        <ShoppingCartIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[350px]">
                    <Cart />
                </SheetContent>
            </Sheet>
        </Card>
    );
}

export default Header;