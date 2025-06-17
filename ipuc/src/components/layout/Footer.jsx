import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-auto">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} IPUC. All rights reserved.
                </p>
                <p className="text-xs mt-2">
                    Made with ❤️ by the IPUC Team
                </p>
            </div>
        </footer>
    );
}