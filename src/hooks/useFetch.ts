import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<{ results: Book[]; next: string | null; count: number } | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
};
