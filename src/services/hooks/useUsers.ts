import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../api";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

type UserResponse = {
    users: User[];
    totalCount: number;
}

export async function getUsers(page): Promise<UserResponse> {
    const { data, headers } = await api.get("users", {
        params: {
            page
        }
    })

    const totalCount = Number(headers['x-total-count']);

    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    });
    return {
        users,
        totalCount
    };
}

export function useUsers(page: number, options: UseQueryOptions) {
    return useQuery(['users', page], () => getUsers(page),
        {
            staleTime: 5000,
            ...options
        }) as UseQueryResult<UserResponse, unknown>;
}
