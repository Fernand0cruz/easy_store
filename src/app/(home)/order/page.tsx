"use client"
import { useSession } from "next-auth/react";

const PageOrder = () => {
    const { data: session } = useSession()
    if (!session) {
        return (
            <div className="flex w-full flex-col items-center justify-center py-8">
                <h1 className=" text-4xl">Sem autorização</h1>
                <p>Faça Login para ver essa página</p>
            </div>
        )

    }
    return (
        <div>
            <h1>Page Order</h1>
        </div>
    );
}
export default PageOrder;