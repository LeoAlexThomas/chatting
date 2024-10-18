import useSWR from "swr";
import ErrorMsg from "./ErrorMsg";
import { Loader } from "@mantine/core";

function WithLoader<T>(apiUrl: string, children: (data: T) => React.ReactNode) {
  const { data, error } = useSWR<T>(apiUrl);

  const isLoading = !data && !error;

  if (error) {
    return <ErrorMsg errorMsg={error.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <></>;
  }

  return <>{children(data)}</>;
}

export default WithLoader;
