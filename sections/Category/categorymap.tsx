import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface html {
  title: string;
  iframe: string;
  url: string;
}

export default function mapa({
  title,
  iframe,
  url,
}: html) {
  return (
    <div>
      <>
      </>
    </div>
  );
}
