import { Stack, Box } from "@chakra-ui/react";
import { Paginator } from "./Paginator";
import { useState, useEffect } from 'react';


interface PaginationProps {
    pages: number,
    activePage?: number,
    itensPerPage?: number
    totalItens: number
}
export function Pagination({ pages, activePage, itensPerPage = 10, totalItens }: PaginationProps) {

    const [activePageState, setActivePageState] = useState(activePage);

    function handleActivePage(valor: number): void {
        setActivePageState(valor)
    }


    function loadPaginator() {
        let paginators = [];
        for (let i = 0; i < pages; i++) {
            paginators.push(<Paginator pageNumber={i === 0 ? 1 : i + 1} activePage={i === activePageState - 1} handleClickActivePage={handleActivePage} />)
        }
        return (
            <Stack
                direction="row"
                mt="8"
                justify="space-between"
                align="center"
                spacing="6"
            >
                <Box>
                    <strong>{activePageState * itensPerPage}</strong> - <strong>{(activePageState * itensPerPage) + itensPerPage} de {totalItens} </strong>
                </Box>
                <Stack direction="row" spacing="2">
                    {paginators.map(paginator => {
                        return paginator;
                    })}
                </Stack>

            </Stack>)
    }

    useEffect(() => {

        loadPaginator();
    }, [activePageState]);

   return loadPaginator();



}