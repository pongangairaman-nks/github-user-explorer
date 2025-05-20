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

interface RepoPaginationProps {
  totalRepos: number;
  reposPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onPerPageChange: (event: SelectChangeEvent<number>) => void;
}

const PaginationServerSide: React.FC<RepoPaginationProps> = ({
  totalRepos,
  reposPerPage,
  currentPage,
  onPageChange,
  onPerPageChange
}) => {
  const totalPages = Math.ceil(totalRepos / reposPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

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
          value={reposPerPage}
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
      <Box display="flex" gap={1} flexWrap="wrap">
        {pages.map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "contained" : "outlined"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default PaginationServerSide;
