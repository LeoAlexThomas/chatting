import { ActionIcon, Button, Center, Space, Stack, Text } from "@mantine/core";
import { useForm } from "react-hook-form";
import InputField from "./form/InputField";
import useApi from "@/hooks/useApi";
import { useRouter } from "next/router";
import api from "@/api";
import { setUserToken } from "./utils";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import useCustomToast, { ToastStatusEnum } from "@/hooks/useCustomToast";

interface SignUpInterface {
  name: string;
  mobile: string;
  email?: string;
  password: string;
  confirmPassword: string;
}

const defaultValues: SignUpInterface = {
  name: "",
  mobile: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ onLoginClicked }: { onLoginClicked: () => void }) => {
  const hookForm = useForm<SignUpInterface>({
    mode: "onChange",
    defaultValues,
  });
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(true);
  const router = useRouter();
  const { showToast } = useCustomToast();
  const { makeApiCall } = useApi();
  const onSubmit = (values: SignUpInterface) => {
    console.log("Registered value: ", values);
    if (values.password !== values.confirmPassword) {
      showToast({
        id: "error-id",
        message: "Confirm password is not matched with password",
        status: ToastStatusEnum.error,
      });
      return;
    }
    makeApiCall<{ token: string }>({
      apiFn: () =>
        api("/user/register", {
          method: "POST",
          data: values,
        }),
      onSuccess: (response) => {
        setUserToken(response.token);
        router.replace("/");
      },
      successMessage: "User Registered Successfully",
      onFailure: (error: any) => {
        if (error?.response?.status === 403) {
          onLoginClicked();
          return;
        }
      },
    });
  };
  return (
    <Center
      h="96vh"
      style={{
        overflowY: "auto",
      }}
    >
      <form
        style={{
          width: "100%",
        }}
        onSubmit={hookForm.handleSubmit(onSubmit)}
      >
        <Text ff="Koh Santepheap" fz={32} fw={800} lh="1.24" ta="center">
          SignUp
        </Text>
        <Space h={54} />
        <Stack
          align="stretch"
          w="100%"
          maw={400}
          style={{
            justifySelf: "center",
          }}
        >
          <InputField
            hForm={hookForm}
            name="name"
            rules={{ required: true }}
            title="Name"
            placeholder="Enter your Name"
          />
          <InputField
            hForm={hookForm}
            name="mobile"
            rules={{ required: true }}
            title="Mobile"
            placeholder="Enter your mobile number"
          />
          <InputField
            hForm={hookForm}
            name="password"
            rules={{ required: true }}
            title="Password"
            type={showPassword ? "password" : "text"}
            placeholder="Enter your password"
            rightSection={
              <ActionIcon
                bg="transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IconEye color="black" />
                ) : (
                  <IconEyeOff color="black" />
                )}
              </ActionIcon>
            }
          />
          <InputField
            hForm={hookForm}
            name="confirmPassword"
            rules={{ required: true }}
            title="Confirm Password"
            placeholder="Enter your confirm password"
            type={showConfirmPassword ? "password" : "text"}
            rightSection={
              <ActionIcon
                bg="transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <IconEye color="black" />
                ) : (
                  <IconEyeOff color="black" />
                )}
              </ActionIcon>
            }
          />
          <Button type="submit">SignUp</Button>
        </Stack>
        <Space h={50} />
        <Text fz={14} lh="1.24" ta="center">
          Have an account, Please{" "}
          <Text
            span
            c="blue"
            onClick={onLoginClicked}
            style={{
              cursor: "pointer",
            }}
          >
            Login
          </Text>
        </Text>
      </form>
    </Center>
  );
};

export default SignUpForm;
