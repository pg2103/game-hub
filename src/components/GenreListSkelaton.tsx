import { Skeleton, Stack } from '@chakra-ui/react';

const GenreListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 15 }).map((_, index) => (
        <Stack key={index} direction="row" paddingY="5px" alignItems="center">
          <Skeleton height="32px" width="32px" borderRadius="8px" />
          <Skeleton height="20px" width="75%" />
        </Stack>
      ))}
    </>
  );
};

export default GenreListSkeleton;