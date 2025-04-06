import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";
import { setAuthToken } from '@/lib/auth';

// ...

const signInForm = z.object({
  email: z.string().email(""),
  password: z.string().nonempty(""),
});

// Converte o tipo do zod para o tipo do TS
type SignInFormData = z.infer<typeof signInForm>;

export function SignIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormData>({
    mode: "onChange",
    resolver: zodResolver(signInForm),
    criteriaMode: "all", // mostra todos os erros
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInFormData) {
    try {
      const response = await authenticate(data);
      setAuthToken(response.token);
      toast.success("Login realizado com sucesso.");
      navigate("/");
    } catch (error) {
      toast.error("Credenciais inválidas.");
    }
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

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
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
          <Link to="/sign-up" className="underline underline-offset-4">
            Cadastre-se
          </Link>
        </div>
      </div>
    </>
  );
}
