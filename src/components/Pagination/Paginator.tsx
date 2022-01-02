import { Button } from '@chakra-ui/react';
interface PaginatorProps {
    pageNumber: number,
    activePage?: boolean,
    onPageChange:(valor:number)=>any
}
export function Paginator({ pageNumber, activePage = false, onPageChange }:PaginatorProps) {
    if (activePage) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bgColor:"pink.500",
                    cursor:"default"
                }}
                onClick={()=>{onPageChange(pageNumber)}}
            > {pageNumber}</Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
                bg:"gray.500"
            }}
            onClick={()=>{onPageChange(pageNumber)}}
        >{ pageNumber}</Button >
    )
}
