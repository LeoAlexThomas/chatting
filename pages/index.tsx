import ChatInfo from "@/components/ChatInfo";
import ChatList from "@/components/ChatList";
import { Box, Center, Group, Input, Stack } from "@mantine/core";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState<string>("");
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
          <Group wrap="nowrap" w="100%" h="100%">
            <Stack
              gap={16}
              h="100%"
              w={550}
              style={{
                overflowY: "auto",
              }}
            >
              <Input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search People ..."
              />

              <ChatList searchText={searchText} />
            </Stack>
            <ChatInfo />
          </Group>
        </Center>
      </Box>
    </>
  );
}
