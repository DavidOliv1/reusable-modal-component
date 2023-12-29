import { FieldValues, useForm } from "react-hook-form";
import Modal from "./Modal";
import Input from "./Input";
import useSignUpModalStore from "../store/useSignUpModalStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../schemas/signUpSchema";
import { useEffect } from "react";

const SignUpModal = () => {
  const { isOpen, onClose } = useSignUpModalStore();

  const {
    register,
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
  } = useForm<FieldValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    reset();
  }, [isOpen]);

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    console.log(data);
    reset();
  };

  const body = (
    <div className="flex flex-col gap-6 py-2">
      <Input
        id="email"
        type="email"
        label="Email"
        register={register}
        errors={errors}
        required
        disabled={isSubmitting}
      />
      <Input
        id="password"
        type="password"
        label="Password"
        register={register}
        errors={errors}
        required
        disabled={isSubmitting}
      />
      <Input
        id="confirmPassword"
        type="password"
        label="Confirm Password"
        register={register}
        errors={errors}
        required
        disabled={isSubmitting}
      />
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      disabled={isSubmitting}
      onAction={handleSubmit(onSubmit)}
      onClose={onClose}
      actionLabel="Continuar"
      body={body}
      title="Entrar ou cadastrar-se"
    />
  );
};

export default SignUpModal;
