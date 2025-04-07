import { signUp } from "@/api/sign-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const signUpForm = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
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

type SignUpFormData = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    trigger,
  } = useForm<SignUpFormData>({
    mode: "onChange",
    resolver: zodResolver(signUpForm),
    criteriaMode: "all", // mostra todos os erros
  });


  const { mutateAsync: registerUser } = useMutation({
    mutationFn: signUp,
  })

  async function handleSignUp(data: SignUpFormData) {
    try {
      await registerUser(data)
      toast.success("Usuário cadastrado com sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      });
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Erro ao cadastrar usuário.')
      } else {
        toast.error('Erro inesperado.')
      }
    }
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

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="font-medium">
                Nome
              </Label>
              <Input
                type="text"
                placeholder="John Doe"
                {...register("name")}
                error={errors.name}
              />
            </div>
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
            <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
              Ao continuar, você concorda com nossos{" "}
              <a href="" className="underline underline-offset-4">
                termos de serviço
              </a>{" "}
              e{" "}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
        <hr className="border-border my-5" />
        <div className="text-center text-sm">
          Já tem uma conta?{" "}
          <Link to="/sign-in" className="underline underline-offset-4">
            Faça login
          </Link>
        </div>
      </div>
    </>
  );
}
