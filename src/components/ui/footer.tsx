import { Card } from "./card"

const Footer = () => {
    return (
        <Card>
            <div className="px-4 py-4 opacity-75 max-w-screen-xl mx-auto">
                Copyright (C) 2023-2024 <span className="font-semibold"><a href="https://fernandow.vercel.app/">Fernand0W</a></span>
            </div>
        </Card>
    );
}

export default Footer;