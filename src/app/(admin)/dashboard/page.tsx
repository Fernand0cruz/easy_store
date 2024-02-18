import { prismaClient } from "@/lib/prisma"
import Dashboard from "./components/dashboard"

export default async function PageDashboard() {
    const isAdmin = await prismaClient.user.findFirst({
        where: {
            isAdmin : true
        }
    })

    return (
        <>
            <Dashboard isAdmin={isAdmin}/>
        </>
    )
}