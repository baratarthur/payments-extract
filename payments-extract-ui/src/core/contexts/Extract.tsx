import { createContext, useState, ReactNode, useEffect } from "react";
import { Extract } from "@model/Extract";
import { Pagination } from "@model/Pagination";
import { Summary } from "@model/Summary";
import { extractClient } from "@core/api";

type ApiResponse = {
    summary: Summary,
    pagination: Pagination,
    items: Extract[]
}

type ContextType = {
    summary: Summary | undefined,
    pagination: Pagination | undefined,
    loading: boolean,
    extract: Extract[]
}

const initialState = {
    loading: true,
    summary: undefined,
    pagination: undefined,
    extract: []
};

export const ExtractContext = createContext<ContextType>(initialState);

type ProviderProps = {
    children: ReactNode
}

export const ExtractProvider = ({ children } : ProviderProps) => {
    const [extract, setExtract] = useState<Extract[]>([]);
    const [pagination, setPagination] = useState<Pagination>();
    const [summary, setSummary] = useState<Summary>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchExtract = () => {
        extractClient.get<ApiResponse>('/extract')
            .then(response => response.data)
            .then(data => {
                setExtract(data.items);
                setPagination(data.pagination);
                setSummary(data.summary);
                setLoading(false);
            })
    }

    useEffect(() => {
        return () => fetchExtract()
    }, []);

    return (
        <ExtractContext.Provider value={{loading, extract, pagination, summary}}>
            {children}
        </ExtractContext.Provider>
    )
}
