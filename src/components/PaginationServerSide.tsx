import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface PaginationProps {
  totalCount: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onPerPageChange: (event: SelectChangeEvent<number>) => void;
}

const getPageNumbers = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  const pages: (number | string)[] = [];

  if (totalPages <= 8) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  }

  pages.push(1);

  const start = Math.max(2, currentPage - 2);
  const end = Math.min(totalPages - 1, currentPage + 2);

  if (start > 2) pages.push("...");

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) pages.push("...");

  pages.push(totalPages);

  return pages;
};

const PaginationServerSide: React.FC<PaginationProps> = ({
  totalCount,
  perPage,
  currentPage,
  onPageChange,
  onPerPageChange
}) => {
  const totalPages = Math.ceil(totalCount / perPage);
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <Box
      mt={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
    >
      <FormControl sx={{ minWidth: 120, mb: 2 }}>
        <InputLabel id="per-page-label">Per Page</InputLabel>
        <Select
          labelId="per-page-label"
          value={perPage}
          label="Per Page"
          onChange={onPerPageChange}
        >
          {[5, 10, 20, 30].map((count) => (
            <MenuItem key={count} value={count}>
              {count}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box display="flex" gap={1} flexWrap="wrap" alignItems="center">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowBack />
        </Button>

        {pages?.map((page, index) =>
          page === "..." ? (
            <Button key={`ellipsis-${index}`} disabled>
              ...
            </Button>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "contained" : "outlined"}
              onClick={() => onPageChange(Number(page))}
            >
              {page}
            </Button>
          )
        )}

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowForward />
        </Button>
      </Box>
    </Box>
  );
};

export default PaginationServerSide;
