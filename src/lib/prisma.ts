import { PrismaClient } from "@prisma/client";
// Declarar a variável global com o tipo PrismaClient
declare global {
    var cachedPrisma: PrismaClient | undefined;
}
// Usar let para permitir a reatribuição
let prisma: PrismaClient;
// Verificar o ambiente de execução
if (process.env.NODE_ENV === "production") {
    // Em produção, criar um novo PrismaClient
    prisma = new PrismaClient();
} else {
    // Em desenvolvimento, reutilizar o PrismaClient existente
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient();
    }
    prisma = global.cachedPrisma;
}
// Exportar o prismaClient para uso em outros módulos
export const prismaClient = prisma;