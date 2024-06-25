import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

// Criando o handler NextAuth com as opções de autenticação
const handler = NextAuth(authOptions);

// Exportando o handler para os métodos GET e POST
export { handler as GET, handler as POST };
