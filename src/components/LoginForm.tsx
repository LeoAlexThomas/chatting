import { ActionIcon, Button, Center, Space, Stack, Text } from "@mantine/core";
import InputField from "./form/InputField";
import { useForm } from "react-hook-form";
import useApi from "@/hooks/useApi";
import { useRouter } from "next/router";
import { setUserToken } from "./utils";
import api from "@/api";
import lodash from "lodash";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

interface LoginInterface {
  mobile: string;
  password: string;
}

const defaultValues: LoginInterface = {
  mobile: "",
  password: "",
};

const LoginForm = ({ onSignUpClicked }: { onSignUpClicked: () => void }) => {
  const hookForm = useForm<LoginInterface>({
    mode: "onChange",
    defaultValues: defaultValues,
  });
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { makeApiCall } = useApi();

  const onSubmit = (values: LoginInterface) => {
    makeApiCall<{ token: string }>({
      apiFn: () =>
        api("/user/login", {
          method: "POST",
          data: values,
        }),
      onSuccess: (response) => {
        setUserToken(response.token);
        router.replace("/");
      },
      successMessage: "Logged in successfully",
      onFailure: (error: any) => {
        if (error?.response?.status === 404) {
          onSignUpClicked();
          return;
        }
      },
    });
  };

  return (
    <Center h="90vh" w="100%" p={16}>
      <form
        style={{
          width: "100%",
        }}
        onSubmit={hookForm.handleSubmit(onSubmit)}
      >
        <Text ff="Koh Santepheap" fz={32} fw={800} lh="1.24" ta="center">
          Login
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
            name="mobile"
            rules={{
              required: true,
              validate: (val) => {
                if (!lodash.isNumber(Number(val))) {
                  return "Please enter number only";
                }
                if (String(val).length !== 10) {
                  return "Entered value must be 10 character length";
                }
                return true;
              },
            }}
            type="number"
            title="Mobile"
            placeholder="Enter your mobile number"
          />
          <InputField
            hForm={hookForm}
            name="password"
            rules={{ required: true }}
            type={showPassword ? "password" : "text"}
            title="Password"
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
          <Button type="submit">Login</Button>
        </Stack>
        <Space h={50} />
        <Text fz={14} lh="1.24" ta="center">
          Don't have an account, Please{" "}
          <Text
            span
            c="blue"
            onClick={onSignUpClicked}
            style={{
              cursor: "pointer",
            }}
          >
            SignUp
          </Text>
        </Text>
      </form>
    </Center>
  );
};

export default LoginForm;
