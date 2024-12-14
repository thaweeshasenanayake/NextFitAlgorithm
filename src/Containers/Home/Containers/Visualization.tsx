import React from "react";
import { Box, Typography } from "@mui/material";

interface VisualizationProps {
  memoryBlocks: { size: number; allocated: boolean }[];
}

export const Visualization: React.FC<VisualizationProps> = ({
  memoryBlocks,
}) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexWrap: "wrap",
        gap: theme.spacing(2),
        marginTop: theme.spacing(2),
      })}
    >
      {memoryBlocks.map((block, index) => (
        <Box
          key={index}
          sx={(theme) => ({
            width: "120px",
            height: "120px",
            backgroundColor: block.allocated ? theme.palette.error.main : theme.palette.info.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: `1px solid black`,
          })}
        >
          <Typography textAlign="center" variant="subtitle1">
            {block.size} KB {block.allocated ? "(Allocated)" : ""}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
