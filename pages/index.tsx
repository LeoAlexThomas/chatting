import ChatInfo from "@/components/ChatInfo";
import ChatList from "@/components/ChatList";
import { Box, Center, Grid, Stack } from "@mantine/core";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chatting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box
        h="100vh"
        style={{
          backgroundImage:
            "linear-gradient(0,  var(--mantine-color-primary-gray-3), var(--mantine-color-primary-gray-0))",
        }}
        p={16}
      >
        <Center
          w="100%"
          h="100%"
          maw={1200}
          mx="auto"
          p={16}
          bg="white"
          style={{
            borderRadius: 16,
          }}
        >
          <Grid columns={5} w="100%" h="100%">
            <Grid.Col
              style={{
                borderRight: "1px solid #000000",
              }}
              span={2}
            >
              <Stack>
                <ChatList />
              </Stack>
            </Grid.Col>
            <Grid.Col span="auto">
              <ChatInfo />
            </Grid.Col>
          </Grid>
        </Center>
      </Box>
    </>
  );
}
