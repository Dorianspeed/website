export const fetcher = async <T>(url: string, init: RequestInit) => {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`Status code ${response.status}: an error occured while fetching data`, {
      cause: response
    });
  }

  return (await response.json()) as T;
};
