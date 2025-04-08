export const fetcher = async <T>(url: string, init: RequestInit): Promise<T> => {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`Status code ${response.status}: an error occured while fetching data`, {
      cause: response
    });
  }

  return await response.json();
};
