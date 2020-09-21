import { EOL as eol } from "https://deno.land/std@0.68.0/fs/eol.ts";
export { SEP } from "https://deno.land/std@0.65.0/path/separator.ts";
export { encode } from "https://deno.land/std@0.68.0/encoding/utf8.ts";

export const EOL = Deno.build.os === "windows" ? eol.CRLF : eol.LF;
