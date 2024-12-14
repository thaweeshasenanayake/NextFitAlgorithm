import { Box, Typography, Button } from "@mui/material";

interface ConfirmationProps {
  handleBack: () => void;
  handleConfirm: () => void;
  memorySizes: number[];
  processSizes: number[];
}

export const Confirmation: React.FC<ConfirmationProps> = (props) => {
  const { handleBack, handleConfirm, memorySizes, processSizes } = props;

  return (
    <Box>
      <Box>
        <Typography variant="h6">Memory Sizes</Typography>
        <Box
          sx={(theme) => ({
            mt: theme.spacing(1),
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
      </Box>
      <Box>
        <Typography variant="h6">Process Sizes</Typography>
        <Box
          sx={(theme) => ({
            mt: theme.spacing(1),
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing(2),
          })}
        >
          {processSizes.map((memorySize, index) => (
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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          mt: 2,
        }}
      >
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </Box>
    </Box>
  );
};
