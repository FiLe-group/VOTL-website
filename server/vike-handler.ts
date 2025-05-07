/// <reference lib="webworker" />
import { renderPage } from "vike/server";
import type { Request, Response } from "express";

export async function vikeHandler(req: Request, res: Response) {
  const pageContextInit = {
    urlOriginal: req.originalUrl,
    headersOriginal: req.headers,
  }

  const pageContext = await renderPage(pageContextInit)

  if (pageContext.errorWhileRendering) {
    // Install error tracking here, see https://vike.dev/error-tracking
  }

  const { httpResponse } = pageContext
  // Early hints, https://vike.dev/preloading#early-hints
  if (res.writeEarlyHints) res.writeEarlyHints({ link: httpResponse.earlyHints.map((e) => e.earlyHintLink) })
  httpResponse.headers.forEach(([name, value]) => res.setHeader(name, value))
  res.status(httpResponse.statusCode)
  // HTTP stream, see https://vike.dev/streaming
  httpResponse.pipe(res)
}
