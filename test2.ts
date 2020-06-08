import { launch } from "https://deno.land/x/carol@v0.0.6/mod.ts";
import { dirname, join } from "https://deno.land/std@0.54.0/path/mod.ts";

const app = await launch({
  title: "Hello Deno!",
  width: 480,
  height: 320
});

app.onExit().then(() => Deno.exit(0));

await app.exposeFunction("greet", (name: string) => `Hello, ${name}!`);
const folder = join(dirname(new URL(import.meta.url).pathname), "public");
app.serveFolder(folder); // Serve contents from "./public" folder
await app.load("index.html");
