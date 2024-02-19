import { Button } from "@/components/ui/button";
import Link from "next/link";

const Register = () => {
    // Todo: Store user data on database
    return (
        <main className="py-[15vh] px-[5vw] sm:px-[10vw] md:px-[30vw] lg:px-[35vw] h-full bg-[url('/login.png')] bg-center bg-cover">
            <div className="flex flex-col align-center justify-center text-center gap-4">
                <h1 className="text-3xl">Register</h1>
                <form className="flex flex-col border-2 rounded-lg gap-2 p-4 bg-gray-100 text-left" action="" >

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="Firstname">First Name</label>
                            <input type="text" placeholder="First Name" className="border-2 rounded h-12 px-3" required />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="Lastname">Last Name</label>
                            <input type="text" placeholder="Last Name" className="border-2 rounded h-12 px-3" required />
                        </div>
                    </div>

                    <label htmlFor="Username">Username</label>
                    <input type="text" placeholder="Username" className="border-2 rounded h-12 px-3" required />

                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder="Email" className="border-2 rounded h-12 px-3" required />

                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder="Password" className="border-2 rounded h-12 px-3" required />

                    <Button>Register</Button>
                </form>
                <p>or</p>
                <span className="hover:underline">
                    <Link href="/login">Already have an account?</Link>
                </span>
            </div>
        </main>
    );
}
 
export default Register;