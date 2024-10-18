import { Center, CenterProps, Loader, LoaderProps } from "@mantine/core";

const CustomLoader = ({
  loaderProps,
  ...props
}: { loaderProps?: LoaderProps } & CenterProps) => {
  return (
    <Center {...props}>
      <Loader size="md" {...loaderProps} />
    </Center>
  );
};

export default CustomLoader;
