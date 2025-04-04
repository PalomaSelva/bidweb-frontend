import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginForm = z.object({
  email: z.string().email(""),
  password: z.string(),
});

// Converte o tipo do zod para o tipo do TS
type SignInFormData = z.infer<typeof loginForm>;

export function LogIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormData>({
    mode: "onChange",
    resolver: zodResolver(loginForm),
    criteriaMode: "all", // mostra todos os erros
  });

  async function handleLogin(data: SignInFormData) {
    navigate("/");
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[370px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-muted-foreground text-sm">
              Insira seu e-mail para entrar na sua conta
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="font-medium">
                E-mail
              </Label>
              <Input
                type="email"
                placeholder="exemplo@email.com"
                {...register("email")}
                error={errors.email}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="font-medium">
                Senha
              </Label>
              <Input
                type="password"
                placeholder="********"
                {...register("password")}
                error={errors.password}
              />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Entrar
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Não tem uma conta?{" "}
          <Link to="/sign-in" className="underline underline-offset-4">
            Cadastre-se
          </Link>
        </div>
      </div>
    </>
  );
}
