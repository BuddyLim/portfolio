import { openNewTabRedirect } from "@/lib/utils";
import { HTMLProps } from "react";

interface NewTabLinkProps extends React.PropsWithChildren {
  url: string;
  children: string | React.ReactElement;
  className?: HTMLProps<HTMLElement>["className"];
}

export const NewTabLink = ({
  url,
  className = "",
  children,
}: NewTabLinkProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`hover:text-[#02C9D7] group-hover:text-[#02C9D7] group-hover:text-[1.02rem] md:group-hover:text-[1.16rem] duration-300 transition-all group md:hover:text-[1.16rem] hover:text-[1.02rem]
    focus:outline-none focus-visible:text-[#02C9D7] focus:ring-2 ring-inset focus:border-[#02C9D7]/30 focus-visible:ring-[#02C9D7]/30 cursor-pointer ${className}`}
    onClick={(event) => event.currentTarget.blur()}
    // onAuxClick={() => openNewTabRedirect(url)}
  >
    {children}
  </a>
);

export const MaskedIcon = ({ iconURL }: { iconURL: string }) => {
  return (
    <span
      className="icon bg-[#F2F2F2] group-hover:bg-[#02C9D7] duration-300 mb-[2px] w-5 h-5 flex group-focus-within:bg-[#02C9D7] active:bg-[#F2F2F2]"
      style={{
        maskImage: `url(${iconURL})`,
        WebkitMaskImage: `url(${iconURL})`,
      }}
    />
  );
};
