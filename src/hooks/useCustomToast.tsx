import { notifications } from "@mantine/notifications";

export enum ToastStatusEnum {
  success = "success",
  error = "error",
  warning = "warning",
}

const useCustomToast = () => {
  const showToast = ({
    id,
    message,
    status,
  }: {
    id: string;
    message: string;
    status: ToastStatusEnum;
  }) => {
    console.log("Notification triggered");
    notifications.show({
      id,
      message: message,
      color:
        status === ToastStatusEnum.success
          ? "green"
          : status === ToastStatusEnum.error
          ? "red"
          : "yellow",
    });
  };
  return { showToast };
};

export default useCustomToast;
