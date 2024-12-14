import { Box, Button } from "@mui/material";
import { Confirmation, InputForm, Results } from "./Containers";
import { useState } from "react";
import { nextFitAllocation } from "./Functions";
import { Visualization } from "./Containers/Visualization";

export const Home = () => {
  const [step, setStep] = useState<number>(0);

  const [memorySizes, setMemorySizes] = useState<number[]>([]);
  const [processSizes, setProcessSizes] = useState<number[]>([]);
  const [allocationResults, setAllocationResults] = useState<string[]>([]);
  const [memoryBlocks, setMemoryBlocks] = useState<
    { size: number; allocated: boolean }[]
  >([]);

  const handleSimulate = () => {
    const { results, memoryBlocks } = nextFitAllocation(
      memorySizes,
      processSizes
    );
    setAllocationResults(results);
    setMemoryBlocks(memoryBlocks);
    setStep(2);
  };

  const handleBack = () => {
    setStep(0);
    setMemorySizes([]);
    setProcessSizes([]);
    setAllocationResults([]);
    setMemoryBlocks([]);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      {step === 0 && (
        <InputForm
          handleNext={(memorySizes: number[], processSizes: number[]) => {
            setMemorySizes(memorySizes);
            setProcessSizes(processSizes);
            setStep(1);
          }}
        />
      )}

      {step === 1 && (
        <Confirmation
          handleBack={handleBack}
          handleConfirm={handleSimulate}
          memorySizes={memorySizes}
          processSizes={processSizes}
        />
      )}

      {step === 2 && (
        <Box>
          <Results allocationResults={allocationResults} />
          <Visualization memoryBlocks={memoryBlocks} />

          <Box mt={2}>
            <Button variant="outlined" onClick={handleBack}>
              Back to Home
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};
