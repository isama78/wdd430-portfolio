"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex items-center space-x-2 select-none"
      aria-label="Pagination Navigation"
    >
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="px-4 py-2 text-sm font-medium text-foreground rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
        >
          Previous
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm font-medium text-muted-custom rounded-lg bg-white/5 border border-white/5 opacity-50 cursor-not-allowed">
          Previous
        </span>
      )}

      <div className="px-4 py-2 text-sm font-light text-muted-custom bg-white/5 border border-white/5 rounded-lg">
        Page <span className="text-foreground font-normal">{currentPage}</span>{" "}
        of <span className="text-foreground font-normal">{totalPages}</span>
      </div>

      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="px-4 py-2 text-sm font-medium text-foreground rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
        >
          Next
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm font-medium text-muted-custom rounded-lg bg-white/5 border border-white/5 opacity-50 cursor-not-allowed">
          Next
        </span>
      )}
    </nav>
  );
}
