import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email(""),
  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .refine((value) => /[A-Z]/.test(value), {
      message: "A senha deve conter pelo menos uma letra maiúscula",
    })
    .refine((value) => /[a-z]/.test(value), {
      message: "A senha deve conter pelo menos uma letra minúscula",
    })
    .refine((value) => /\d/.test(value), {
      message: "A senha deve conter pelo menos um número",
    })
    .refine((value) => /[\W_]/.test(value), {
      message: "A senha deve conter pelo menos um caractere especial",
    }),
});

type SignInFormData = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    trigger,
  } = useForm<SignInFormData>({
    mode: "onChange",
    resolver: zodResolver(signInForm),
    criteriaMode: "all", // mostra todos os erros
  });

  async function handleSignIn(data: SignInFormData) {
    console.log(data, errors);

    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <div className="flex w-[370px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Cadastro</h1>
            <p className="text-muted-foreground text-sm">
              Insira seu e-mail para criar sua conta
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
                onChange={(e) => {
                  register("password").onChange(e);
                  trigger("password");
                }}
              />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Cadastrar
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
