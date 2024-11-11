import isNil from "lodash/isNil";
import useCustomToast, { ToastStatusEnum } from "./useCustomToast";

const successToastId = "successToastId";
const errorToastId = "errorToastId";

const useApi = () => {
  const { showToast } = useCustomToast();
  async function makeApiCall<T>({
    apiFn,
    onSuccess,
    onFailure,
    successMessage,
  }: {
    apiFn: () => T;
    onSuccess?: (response: T) => void;
    onFailure?: (error: any) => void;
    successMessage?: string;
  }) {
    try {
      const response = await apiFn();
      if (!isNil(successMessage)) {
        showToast({
          id: successToastId,
          message: successMessage,
          status: ToastStatusEnum.success,
        });
      }
      if (onSuccess) {
        onSuccess(response);
      }
    } catch (error: any) {
      console.log("Api Error: ", error);
      showToast({
        id: errorToastId,
        message: error?.response?.data?.message ?? "Error",
        status: ToastStatusEnum.error,
      });
      onFailure?.(error);
    }
  }

  return { makeApiCall };
};

export default useApi;
