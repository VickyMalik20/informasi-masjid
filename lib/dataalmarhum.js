import useSWR from 'swr'

async function fetcher(url) {
    const res = await fetch(url)
    return res.json();
}

export const useDataalmarhum = () => {
    const url = "http://localhost:3000/api/dataalmarhum";
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });


    return { data, error }
}