"use client";
import { useSession } from "next-auth/react";


const Dashboard = ({ isAdmin }: any) => {
    const { data, status } = useSession();

    if (status === "authenticated" && isAdmin.email === data?.user?.email) {
        return (
            <div>
                <h1>Dashboard</h1>
            </div>

        )
    } else {
        return (
            <div className="flex w-full flex-col items-center justify-center py-8">
                <h1 className=" text-4xl">Sem autorização</h1>
                <p>Página de ADMINISTRADOR faça login com seu email de admin para ter acesso</p>
            </div>
        );
    }
}

export default Dashboard;