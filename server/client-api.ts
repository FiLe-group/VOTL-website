import {Command} from "../pages/(main)/commands/types";
import {callReturn} from "./core";
import {Routes} from "./routes";

export async function apiCommands(): Promise<Command[]> {
  return callReturn<Command[]>(
    Routes.commands,
    {
      origin: 'https://cdn.fileeditor.dev',
      request: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'omit',
      }
    }
  )
}