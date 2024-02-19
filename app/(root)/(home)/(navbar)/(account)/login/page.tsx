import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/public/login.png";

const Login = () => {
    // Todo: Authenticate user
    return (
        <main className="py-[20vh] px-[5vw] sm:px-[10vw] md:px-[30vw] lg:px-[35vw] h-full bg-[url('/login.png')] bg-center bg-cover">
            
            <div className="flex flex-col align-center justify-center text-center gap-4">
                
                <h1 className="text-3xl">Login</h1>
                <form className="flex flex-col border-2 rounded-lg gap-2 p-4 bg-gray-100 text-left" action="" >
                    <label htmlFor="Username">Username</label>
                    <input type="text" placeholder="Username" className="border-2 rounded h-12 px-3" required />
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder="Password" className="border-2 rounded h-12 px-3" required />
                    <Button>Login</Button>
                </form>
                <span className="hover:underline">
                    <Link href="/forgor">Forgot your password?</Link>
                </span>
                <p>or</p>
                <span className="hover:underline">
                    <Link href="/register">Don't have an account?</Link>
                </span>

            </div>

        </main>
    );
}
 
export default Login;