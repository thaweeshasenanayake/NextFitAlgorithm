export const nextFitAllocation = (
  memorySizes: number[],
  processSizes: number[]
) => {
  const results: string[] = [];
  const memoryBlocks = memorySizes.map((size) => ({ size, allocated: false }));
  let lastAllocatedIndex = 0;

  processSizes.forEach((process, processIndex) => {
    let allocated = false;

    for (let i = 0; i < memoryBlocks.length; i++) {
      const currentIndex = (lastAllocatedIndex + i) % memoryBlocks.length;
      if (
        !memoryBlocks[currentIndex].allocated &&
        memoryBlocks[currentIndex].size >= process
      ) {
        results.push(
          `Process ${processIndex + 1} (${process} KB) -> Block ${
            currentIndex + 1
          }`
        );
        memoryBlocks[currentIndex].size -= process;
        memoryBlocks[currentIndex].allocated = true;
        lastAllocatedIndex = currentIndex;
        allocated = true;
        break;
      }
    }

    if (!allocated) {
      results.push(
        `Process ${processIndex + 1} (${process} KB) -> Not Allocated`
      );
    }
  });

  return { results, memoryBlocks };
};
