import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean
}
export function PaginationItem({
    number,
    isCurrent = false
}: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
            size='sm'
            fontSize='xs'
            width='4'
            colorScheme='orange.400'
            disabled
            _disabled={{
                bg: 'orange.500',
                cursor: 'default',
            }}
        >
            {number}
        </Button>
        );
    }

    return (
        <Button
            size='sm'
            fontSize='xs'
            width='4'
            color="gray.50"
            bg='orange.800'
            _hover={{
                bg: 'orange.900'
            }}
        >
            {number}
        </Button>
    );
}
