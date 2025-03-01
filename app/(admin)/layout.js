import Adminsidenav from "../components/containers/adminsidenav";

export const metadata = {
    title: "Physics Bro | Admin Dashboard",
    description: "All your stuff at one place",
};

export default function RootLayout({ children }) {
    return (
        <>
            <Adminsidenav />
            <div className="AdminBg min-h-svh sm:min-h-screen">
                {children}
            </div>
        </>
    );
}