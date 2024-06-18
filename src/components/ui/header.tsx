"use client"

import {
    MenuIcon,
    ShoppingCartIcon,
    LogInIcon,
    HomeIcon,
    PercentIcon,
    ListOrderedIcon,
    LogOutIcon
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger
} from "./sheet";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "./avatar";
import { Separator } from "./separator";
import Cart from "./cart";
import {
    signIn,
    signOut,
    useSession
} from "next-auth/react"
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/providers/cart";

const Header = () => {

    const { status, data } = useSession()
    const { products } = useContext(CartContext)
    const [cartQuantityItems, setCartQuantityItems] = useState(0);

    // Atualiza cartQuantityItems sempre que a lista de produtos mudar
    useEffect(() => {
        setCartQuantityItems(products.length);
    }, [products]);

    // Função para gerenciar cliques no botão de autenticação
    const handleAuthClick = async () => {
        if (status === "authenticated") {
            // Realiza o logout se o usuário estiver autenticado
            await signOut();
        } else {
            // Inicia o processo de login se o usuário não estiver autenticado
            await signIn();
        }
    };

    // Função para renderizar dinamicamente o botão de autenticação
    const renderAuthButton = () => {
        // Determina o texto e o ícone do botão com base no estado de autenticação
        const buttonText = status === "authenticated" ? "Fazer Logout" : "Fazer Login";
        const ButtonIcon = status === "authenticated" ? LogOutIcon : LogInIcon;

        // Retorna o componente de botão com o texto e ícone correspondentes
        return (
            <Button onClick={handleAuthClick} variant="outline" className="w-full justify-start gap-2">
                <ButtonIcon size={16} />
                {buttonText}
            </Button>
        );
    };

    return (
        <Card className="fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center py-[1.875rem] max-w-7xl m-auto px-4">
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
                                            <p className="font-medium">Bem Vindo, {data.user.name}!</p>
                                            <p className="text-sm opacity-75">Boas compras!</p>
                                        </div>
                                    </div>
                                    <Separator />
                                </div>
                            )
                        }

                        <div className="mt-4 flex flex-col gap-2">

                            {renderAuthButton()}

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
                <Link href="/">
                    <h1 className="text-lg font-semibold cursor-pointer"><span className="text-primary">::::</span> EASY STORE <span className="text-primary">::::</span></h1>
                </Link>
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
            </div>
        </Card>
    );
}
export default Header;