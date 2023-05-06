import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export const ConfirmPasswordField = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);
    const onClickReveal = () => {
      onToggle();
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    };

    return (
      <FormControl>
        <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="link"
              aria-label={
                isOpen ? "Mask confirm password" : "Reveal confirm password"
              }
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            id="confirmPassword"
            ref={mergeRef}
            name="confirmPassword"
            type={isOpen ? "text" : "password"}
            autoComplete="confirm-password"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

ConfirmPasswordField.displayName = "ConfirmPasswordField";
