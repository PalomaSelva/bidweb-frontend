import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

export function SignIn() {
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Cadastro</h1>
            <p className="text-muted-foreground text-sm">
              Insira seu e-mail para criar sua conta
            </p>
          </div>

          <form className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="font-medium">
                E-mail
              </Label>
              <Input id="email" type="email" placeholder="exemplo@email.com" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="font-medium">
                Senha
              </Label>
              <Input id="password" type="password" placeholder="********" />
            </div>
            <Button className="w-full" type="submit">
              Entrar
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Já tem uma conta?{" "}
          <Link to="/login" className="underline underline-offset-4">
            Faça login
          </Link>
        </div>
      </div>
    </>
  );
}
