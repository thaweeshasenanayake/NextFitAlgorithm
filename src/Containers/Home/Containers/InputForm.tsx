import {
  Box,
  Button,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface InputFormProps {
  handleNext: (memorySizes: number[], processSizes: number[]) => void;
}

export const InputForm: React.FC<InputFormProps> = (props) => {
  const { handleNext } = props;

  const [memorySizes, setMemorySizes] = useState<number[]>([]);
  const [processSizes, setProcessSizes] = useState<number[]>([]);

  const [memorySizeInput, setMemorySizeInput] = useState<number>(0);
  const [processSizeInput, setProcessSizeInput] = useState<number>(0);

  const handleMemoryBlockSizeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMemorySizeInput(parseInt(event.target.value));
  };

  const handleAddMemorySize = () => {
    if (memorySizeInput === 0) {
      return;
    }

    if (memorySizes.length >= 10) {
      return;
    }

    setMemorySizes([...memorySizes, memorySizeInput]);
    setMemorySizeInput(0);
  };

  const handleProcessSizeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProcessSizeInput(parseInt(event.target.value));
  };

  const handleAddProcessSize = () => {
    if (processSizeInput === 0) {
      return;
    }

    if (processSizes.length >= 10) {
      return;
    }

    setProcessSizes([...processSizes, processSizeInput]);
    setProcessSizeInput(0);
  };

  const handleNextClick = () => {
    handleNext(memorySizes, processSizes);
  };

  return (
    <Box>
      <Box
        sx={(theme) => ({
          padding: theme.spacing(2),
          backgroundColor: theme.palette.background.paper,
        })}
      >
        <Typography variant="h6">Memory Block Sizes</Typography>
        <Stack mt={4} direction="row" spacing={4}>
          <Stack spacing={2}>
            <TextField
              name="memoryBlockSize"
              id="memoryBlockSize"
              label="Memory Block Size"
              sx={{
                width: "200px",
              }}
              slotProps={{
                input: {
                  endAdornment: "KB",
                },
                inputLabel: {
                  shrink: true,
                },
              }}
              type="number"
              value={memorySizeInput}
              onChange={handleMemoryBlockSizeChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddMemorySize}
            >
              Add
            </Button>
          </Stack>

          <Box
            sx={(theme) => ({
              borderLeft: `1px solid ${theme.palette.divider}`,
              paddingLeft: theme.spacing(2),
              display: "flex",
              flexDirection: "row",
              gap: theme.spacing(2),
            })}
          >
            {memorySizes.map((memorySize, index) => (
              <Box
                sx={(theme) => ({
                  width: "70px",
                  height: "70px",
                  display: "flex",

                  justifyContent: "center",
                  alignItems: "center",
                  border: `1px solid ${theme.palette.divider}`,
                  padding: theme.spacing(1),
                  borderRadius: theme.shape.borderRadius,
                })}
                key={index}
              >
                <Typography variant="h6">{memorySize}</Typography>
              </Box>
            ))}
          </Box>
        </Stack>
        {memorySizes.length >= 10 && (
          <FormHelperText error sx={{ mt: 2 }}>
            You can add a maximum of 10 memory blocks.
          </FormHelperText>
        )}
      </Box>

      <Box
        sx={(theme) => ({
          marginTop: theme.spacing(2),
          padding: theme.spacing(2),
          backgroundColor: theme.palette.background.paper,
        })}
      >
        <Typography variant="h6">Process Sizes</Typography>
        <Stack mt={4} direction="row" spacing={4}>
          <Stack spacing={2}>
            <TextField
              name="processSize"
              id="processSize"
              label="Process Size"
              sx={{
                width: "200px",
              }}
              slotProps={{
                input: {
                  endAdornment: "KB",
                },
                inputLabel: {
                  shrink: true,
                },
              }}
              type="number"
              value={processSizeInput}
              onChange={handleProcessSizeChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddProcessSize}
            >
              Add
            </Button>
          </Stack>

          <Box
            sx={(theme) => ({
              borderLeft: `1px solid ${theme.palette.divider}`,
              paddingLeft: theme.spacing(2),
              display: "flex",
              flexDirection: "row",
              gap: theme.spacing(2),
            })}
          >
            {processSizes.map((processSize, index) => (
              <Box
                sx={(theme) => ({
                  width: "70px",
                  height: "70px",
                  display: "flex",

                  justifyContent: "center",
                  alignItems: "center",
                  border: `1px solid ${theme.palette.divider}`,
                  padding: theme.spacing(1),
                  borderRadius: theme.shape.borderRadius,
                })}
                key={index}
              >
                <Typography variant="h6">{processSize}</Typography>
              </Box>
            ))}
          </Box>
        </Stack>
        {processSizes.length >= 10 && (
          <FormHelperText error sx={{ mt: 2 }}>
            You can add a maximum of 10 processes.
          </FormHelperText>
        )}
      </Box>
      <Button
        sx={{
          mt: 2,
        }}
        variant="contained"
        color="primary"
        onClick={handleNextClick}
        disabled={memorySizes.length === 0 || processSizes.length === 0}
      >
        Next
      </Button>
    </Box>
  );
};
