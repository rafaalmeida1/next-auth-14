"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm() { 
    const [email, setEmail] = useState<null | string>(null)
    
    async function SignInWithEmail() {
        const signInResult = await signIn("email", {
            email: email,
            callbackUrl: `${window.location.origin}`,
            redirect: false,
        })

        if(!signInResult?.ok) {
            return toast({
                title: 'Bom, isso não funcionou...',
                description: 'Alguma coisa deu errado, tente novamente',
                variant: "destructive"
            })
        }

        return toast({
            title: 'Cheque seu email',
            description: 'Um link de acesso foi enviado à você'
        })
    }

    return (
        <form action={SignInWithEmail}>
            <div className="flex flex-col gap-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                />
            </div>
            <Button type="submit" className="mt-4 w-full">Login with Email</Button>
        </form>
    );
}
