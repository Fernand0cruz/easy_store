import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prismaClient), // Configura o adaptador Prisma
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string, // ID do cliente Google
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, // Segredo do cliente Google
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            // Adiciona o ID do usuário à sessão
            session.user = { ...session.user, id: user.id } as {
                id: string;
                name: string;
                email: string;
            };
            return session; // Retorna a sessão modificada
        },
    },
};