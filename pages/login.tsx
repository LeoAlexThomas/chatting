import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import { Image, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

const Login = () => {
  const isTablet = useMediaQuery(`(max-width: 769px)`);
  const [showLogin, setShowLogin] = useState<boolean>(true);
  return (
    <Grid columns={4} h="100vh" p={16}>
      <Grid.Col
        span={2}
        display={isTablet ? "none" : "flex"}
        w="50vw"
        h="100vh"
      >
        <Image
          src="/images/chatting_image.png"
          alt="cover image"
          w="100%"
          fit="contain"
        />
      </Grid.Col>
      <Grid.Col span={isTablet ? "content" : 2} w="100%">
        {showLogin ? (
          <LoginForm onSignUpClicked={() => setShowLogin(false)} />
        ) : (
          <SignUpForm onLoginClicked={() => setShowLogin(true)} />
        )}
      </Grid.Col>
    </Grid>
  );
};

export default Login;
