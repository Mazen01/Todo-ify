import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={2}>
      <Typography fontWeight="500" fontSize="2rem">
        TODO-ify
      </Typography>
    </Box>
  );
};