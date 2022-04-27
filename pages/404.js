import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <h1 className="font-mono text-5xl">404</h1>
      <p className="text-xl">
        seems like the page (
        <code className="px-2 rounded dark:bg-nord2">{router.asPath}</code>)
        does not exist...
      </p>
    </div>
  );
}
