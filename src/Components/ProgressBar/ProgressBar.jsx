import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ProgressBar = ({ testId }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress data-testid={testId} />
    </Box>
  );
};
export default ProgressBar;
