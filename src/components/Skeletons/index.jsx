import { Skeleton, Stack } from "@mui/material";

function Skeletons() {
  return (
    <Stack direction="column">
      <Stack my={1} spacing={2} direction="row">
        <Skeleton
          variant="circular"
          sx={{
            width: {
              xs: "30px",
              sm: "40px",
            },
            height: {
              xs: "30px",
              sm: "40px",
            },
          }}
        />
        <Skeleton
          variant="rectangular"
          height="40px"
          sx={{
            width: {
              xs: "170px",
              sm: "410px",
            },
          }}
        />
      </Stack>
      <Stack my={1} spacing={2} direction="row">
        <Skeleton
          variant="circular"
          sx={{
            width: {
              xs: "30px",
              sm: "40px",
            },
            height: {
              xs: "30px",
              sm: "40px",
            },
          }}
        />
        <Skeleton
          variant="rectangular"
          height="40px"
          sx={{
            width: {
              xs: "170px",
              sm: "410px",
            },
          }}
        />
      </Stack>
      <Stack my={1} spacing={2} direction="row">
        <Skeleton
          variant="circular"
          sx={{
            width: {
              xs: "30px",
              sm: "40px",
            },
            height: {
              xs: "30px",
              sm: "40px",
            },
          }}
        />
        <Skeleton
          variant="rectangular"
          height="40px"
          sx={{
            width: {
              xs: "170px",
              sm: "410px",
            },
          }}
        />
      </Stack>
    </Stack>
  );
}

export default Skeletons;
