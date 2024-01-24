import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import SigninWithGithub from "../components/SignInWithGithub";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignInForm from "../components/SignInForm";

export default async function AuthRoute() {
    const session = await getServerSession(authOptions)

    if(session) {
        return redirect('/')
    }

    return (
        <div className="flex items-center bg-slate-950 justify-center w-screen h-screen">
            <Card>
                <CardHeader>
                    <CardTitle>Please sign in</CardTitle>
                    <CardDescription>
                        To Access the private page you have to be authenticated
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <SignInForm />

                        <SigninWithGithub />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
