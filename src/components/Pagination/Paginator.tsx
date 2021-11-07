import { Button } from '@chakra-ui/react';
interface PaginatorProps {
    pageNumber: number,
    activePage?: boolean,
    handleClickActivePage:(valor:number)=>any
}
export function Paginator({ pageNumber, activePage = false, handleClickActivePage }:PaginatorProps) {
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
                onClick={()=>{debugger; handleClickActivePage(pageNumber)}}
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
            onClick={()=>{debugger; handleClickActivePage(pageNumber)}}
        >{ pageNumber}</Button >
    )
}
