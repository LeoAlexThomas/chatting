import {
  Stack,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
} from "@mantine/core";
import { get, isNil } from "lodash";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";

function InputField<T extends FieldValues>({
  hForm,
  name,
  rules,
  title,
  titleProps,
  ...props
}: {
  hForm: UseFormReturn<T>;
  name: Path<T>;
  rules?: RegisterOptions<T>;
  title?: string;
  titleProps?: TextProps;
} & Omit<TextInputProps, "name">) {
  const {
    register,
    formState: { errors },
  } = hForm;
  const error = get(errors, name);

  return (
    <Stack gap={3}>
      {title && (
        <Text ff="Koh Santepheap" fz={16} fw={700} lh="1.25" {...titleProps}>
          {title}{" "}
          {rules?.required === true && (
            <Text span c="red">
              *
            </Text>
          )}
        </Text>
      )}
      <TextInput {...register(name, rules)} {...props} />
      {!isNil(error) && (
        <Text fz={10} c="red">
          {error?.message?.toString() ?? "This field is required"}
        </Text>
      )}
    </Stack>
  );
}

export default InputField;
