import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    label: string;
    name: string;
    error?: FieldError;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, ...rest }, ref) => {

    return (
        <FormControl isInvalid={!!error}>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name}
                type={rest.type}
                placeholder={rest.placeholder}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant={rest.variant}
                _hover={{
                    bgColor: 'gray.900'
                }}
                ref={ref}
                {...rest}
            />
            {!!error &&
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            }
        </FormControl >
    );
}

export const Input = forwardRef(InputBase);