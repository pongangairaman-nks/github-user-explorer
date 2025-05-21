import React from "react";
import {
  Box,
  Button,
  FormControl,
  Select,
  MenuItem,
  type SelectChangeEvent
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import colors from "../constants/colors";

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
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      width={"100%"}
      mt={2}
    >
      <FormControl sx={{ width: 200 }}>
        <Select
          value={perPage}
          onChange={onPerPageChange}
          displayEmpty
          sx={{
            backgroundColor: colors.dropDownBg,
            color: colors.lightPurple,
            borderRadius: "6px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.dropDownPurpleBorder1
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.dropDownPurpleBorder2
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.dropDownPurpleBorder3
            },
            "& .MuiSvgIcon-root": {
              color: colors.dropDownSvgPurple
            },
            pl: 1
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: colors.dropDownMenuBg,
                color: colors.lightPurple
              }
            }
          }}
        >
          <MenuItem disabled value="">
            <em>Rows Per Page</em>
          </MenuItem>
          {[6, 12, 20, 30].map((count) => (
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
          sx={{
            minWidth: 40,
            height: 36,
            borderRadius: "8px",
            backgroundColor: colors.disabledGrey,
            color: colors.lightPurple,
            fontWeight: 600,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: colors.purpleLight
            },
            "&.Mui-disabled": {
              backgroundColor: colors.disabledGrey,
              color: colors.purpleLight4
            }
          }}
        >
          <ArrowBack />
        </Button>

        {pages?.map((page, index) =>
          page === "..." ? (
            <Box
              key={`ellipsis-${index}`}
              sx={{
                minWidth: 40,
                height: 36,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 700,
                fontSize: "1rem",
                color: colors.lightPurple
              }}
            >
              ...
            </Box>
          ) : (
            <Button
              key={page}
              onClick={() => onPageChange(Number(page))}
              sx={{
                minWidth: 40,
                height: 36,
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.9rem",
                backgroundColor:
                  currentPage === page ? colors.lightPurple : colors.white,
                color: currentPage === page ? colors.white : colors.lightPurple,
                border: `1px solid ${colors.paginationBorder}`,
                boxShadow: currentPage === page ? colors.boxShadow : "none",
                "&:hover": {
                  backgroundColor:
                    currentPage === page
                      ? colors.primaryPurple
                      : colors.purpleLight
                }
              }}
            >
              {page}
            </Button>
          )
        )}

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          sx={{
            minWidth: 40,
            height: 36,
            borderRadius: "8px",
            backgroundColor: colors.disabledGrey,
            color: colors.lightPurple,
            fontWeight: 600,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: colors.purpleHoverBg2
            },
            "&.Mui-disabled": {
              backgroundColor: colors.disabledGrey,
              color: colors.lightestGrey
            }
          }}
        >
          <ArrowForward />
        </Button>
      </Box>
    </Box>
  );
};

export default PaginationServerSide;
