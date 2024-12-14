import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

interface ResultsProps {
  allocationResults: string[];
}

export const Results: React.FC<ResultsProps> = ({ allocationResults }) => {
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(2),
      })}
    >
      <Typography variant="h6">Allocation Results</Typography>
      <List>
        {allocationResults.map((result, index) => (
          <ListItem key={index}>
            <Typography>{result}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
