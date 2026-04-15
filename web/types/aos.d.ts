declare module "aos" {
  export type AnchorPlacement =
    | "top-bottom"
    | "top-center"
    | "top-top"
    | "center-bottom"
    | "center-center"
    | "center-top"
    | "bottom-bottom"
    | "bottom-center"
    | "bottom-top";

  export interface AOSOptions {
    disable?: boolean | "mobile" | "phone" | "tablet" | ((...args: unknown[]) => boolean);
    startEvent?: string;
    initClassName?: string;
    animatedClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    debounceDelay?: number;
    throttleDelay?: number;
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: AnchorPlacement;
  }

  export interface AOSStatic {
    init(options?: AOSOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AOSStatic;

  export default AOS;
}
