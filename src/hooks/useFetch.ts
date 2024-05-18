import { useEffect, useState } from "react";

import type { Book } from "../types.ts";

export const useFetch = (url: string) => {
  const [data, setData] = useState<{
    results: Book[];
    next: string | null;
    count: number;
  } | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = (await response.json()) as {
          results: Book[];
          next: string | null;
          count: number;
        };
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (errorOccured) {
        if (errorOccured instanceof Error) {
          setError(`${errorOccured.name}: ${errorOccured.message}`);
        } else {
          setError(`Could not Fetch Data`);
        }
        setIsPending(false);
      }
    };
    void fetchData();
  }, [url]);
  return { data, isPending, error };
};
