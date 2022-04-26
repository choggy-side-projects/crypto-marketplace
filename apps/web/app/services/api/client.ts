interface IApiClientParams {
  path: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  body?: any;
}

export async function apiClient<ResponseType>({
  path,
  method,
  body = undefined,
}: IApiClientParams): Promise<ResponseType> {
  return await fetch(`${process.env.API_URL}/${path}`, {
    method,
    body,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
