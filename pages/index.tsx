import ChatInfo from "@/components/ChatInfo";
import ChatList from "@/components/ChatList";
import UserAvatar from "@/components/UserAvatar";
import { Box, Center, Group, Input, Stack } from "@mantine/core";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
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
          maw={1600}
          mx="auto"
          p={16}
          bg="white"
          style={{
            borderRadius: 16,
          }}
        >
          <Group wrap="nowrap" w="100%" h="100%">
            <Stack gap={16} h="100%" w={550}>
              <Group wrap="nowrap">
                <Input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search People ..."
                  w="100%"
                  fz={16}
                  style={{
                    borderRadius: 12,
                  }}
                />
                <UserAvatar />
              </Group>

              <ChatList searchText={searchText} onSelect={setSelectedRoomId} />
            </Stack>
            <ChatInfo roomId={selectedRoomId} />
          </Group>
        </Center>
      </Box>
    </>
  );
}
