import { Stack, Box, Text } from "@chakra-ui/react";
import { Paginator } from "./Paginator";
import { useState, useEffect } from 'react';


interface PaginationProps {
    activePage?: number,
    itensPerPage?: number
    totalItens: number,
    onPageChange: (page: number) => void
}

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
        .map((_, index) => {
            return from + index + 1;
        })
        .filter(page => page > 0);
}
export function Pagination({ activePage, itensPerPage = 10, totalItens, onPageChange }: PaginationProps) {

    const lastPage = Math.ceil(totalItens / itensPerPage);

    const previousPages = activePage > 1
        ? generatePagesArray((activePage - 1 - siblingsCount), activePage - 1) :
        [];

    const nextPages = activePage < lastPage
        ? generatePagesArray(activePage, Math.min(activePage + siblingsCount, lastPage))
        : [];



    function loadPaginator() {

        return (
            <Stack
                direction={["column", "row"]}
                mt="8"
                justify="space-between"
                align="center"
                spacing="6"
            >
                <Box>
                    <strong>{activePage * itensPerPage}</strong> - <strong>{(activePage * itensPerPage) + itensPerPage} de {totalItens} </strong>
                </Box>
                <Stack direction="row" spacing="2">

                    {activePage > (1 + siblingsCount) && (
                        <>
                            <Paginator pageNumber={1} onPageChange={onPageChange} />
                            {activePage > (2 + siblingsCount) && (
                                <Text color="gray.300" width='8' textAlign='center'>
                                    ...
                                </Text>

                            )}
                        </>
                    )}
                    {previousPages.length > 0 && previousPages.map(page => {
                        return <Paginator key={page} pageNumber={page} onPageChange={onPageChange} />
                    })}

                    <Paginator pageNumber={activePage} activePage onPageChange={onPageChange} />

                    {nextPages.length > 0 && nextPages.map(page => {
                        return <Paginator key={page} pageNumber={page} onPageChange={onPageChange} />
                    })}

                    {(activePage + siblingsCount) < lastPage && (
                        <>
                            {(activePage + 1 + siblingsCount) < lastPage && (
                                <Text color="gray.300" width='8' textAlign='center'>
                                    ...
                                </Text>
                            )}
                            <Paginator pageNumber={lastPage} onPageChange={onPageChange} />
                        </>
                    )}

                </Stack>



            </Stack>)
    }

    return loadPaginator();



}