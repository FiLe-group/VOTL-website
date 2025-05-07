export type ReturnOptions<T> = Options & {
  /**
   * Map result if status code is not equal to 200-299
   * @param status
   */
  allowed?: {
    [status: number]: (res: Response) => T | Promise<T>;
  };
};

export type Options = {
  /**
   * specify the origin url
   */
  origin?: string;

  /**
   * throw an error if status code is not equal to 200-299
   *
   * default: true
   */
  errorOnFail?: boolean;

  request: RequestInit;
};

export async function callReturn<T>(
  url: string,
  init: ReturnOptions<T>,
): Promise<T> {
  const options = await parseOptions(url, init);

  const res = await fetch(options.url, options.request);

  if (!res.ok) {
    if (init.allowed?.[res.status] != null) {
      return init.allowed[res.status](res);
    } else {
      await handleError(res, init);
    }
  }

  return await res.json() as T;
}

// Utils
type ApiResponse = {
  status?: number;
  reason: string;
}

async function handleError(
  res: Response,
  options: Options,
) {
  if (!res.ok && (options.errorOnFail ?? true)) {
    console.log(await res.text());
    const raw = await res.json().catch(() => {
      return {reason: 'Failed to parse.'}
    }) as ApiResponse;
    throw new Error(raw.reason);
  }
}

async function parseOptions<T extends Options>(
  url: string,
  options: T,
) {
  return {
    url: options.origin == null ? url : `${options.origin}${url}`,
    request: options.request,
  }
}