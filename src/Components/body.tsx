import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Body() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedElevator, setSelectedElevator] = useState<"north" | "south">(
    "north"
  );

  // North Elevator
  const [northElevatorIsBroken, setNorthElevatorIsBroken] = useState();
  const [northElevatorTimestampUpdated, setNorthElevatorTimestampUpdated] =
    useState();

  // South Elevator
  const [southElevatorIsBroken, setSouthElevatorIsBroken] = useState();
  const [southElevatorTimestampUpdated, setSouthElevatorTimestampUpdated] =
    useState();

  // API URL
  const api = "https://backend.aretheelevatorsbroken.com/";

  // Fetch initial API Data
  useEffect(() => {
    const fetch = async () => {
      var response = (await axios.get(api)).data;

      setNorthElevatorIsBroken(response.north.isBroken);
      setNorthElevatorTimestampUpdated(response.north.timestampUpdated);

      setSouthElevatorIsBroken(response.south.isBroken);
      setSouthElevatorTimestampUpdated(response.south.timestampUpdated);
    };

    fetch();
  }, []);

  const updateData = async (elevator: "north" | "south", isBroken: boolean) => {
    const response = (await axios.put(api, { elevator, isBroken })).data;

    setNorthElevatorIsBroken(response.north.isBroken);
    setNorthElevatorTimestampUpdated(response.north.timestampUpdated);

    setSouthElevatorIsBroken(response.south.isBroken);
    setSouthElevatorTimestampUpdated(response.south.timestampUpdated);

    setIsModalOpen(false);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: "1",
      }}
    >
      <Grid
        container
        size={1}
        direction="column"
        spacing={2}
        width="100%"
        pt={2}
      >
        {/* North Elevator */}
        <Grid>
          <Card variant="outlined">
            {/* North Elevator Image */}
            <CardMedia
              sx={{ height: "128px" }}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Southeast_Portland%2C_Oregon_%28January_23%2C_2021%29_-_082.jpg/2560px-Southeast_Portland%2C_Oregon_%28January_23%2C_2021%29_-_082.jpg"
            ></CardMedia>

            {/* North Elevator Content */}
            <CardContent>
              {/* Title */}
              <Typography gutterBottom variant="h5">
                North Elevator
              </Typography>

              {/* Current Status */}
              <Stack direction="row">
                {/* Status */}
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  pr={1}
                >
                  Status:
                </Typography>

                {/* Status Loader */}
                {northElevatorIsBroken === undefined ? (
                  <Skeleton />
                ) : (
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {northElevatorIsBroken ? "Broken" : "Operational"}
                  </Typography>
                )}
              </Stack>

              {/* Last Updated Date */}
              <Stack direction="row">
                {/* Last Updated */}
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  pr={1}
                >
                  Last updated:
                </Typography>

                {/* Last Updated Loader */}
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {northElevatorTimestampUpdated === undefined ? (
                    <Skeleton />
                  ) : (
                    new Date(
                      northElevatorTimestampUpdated * 1000
                    ).toLocaleString()
                  )}
                </Typography>
              </Stack>
            </CardContent>

            {/* North Elevator Update Button */}
            <CardActions>
              <Button
                disabled={northElevatorTimestampUpdated === undefined}
                onClick={() => {
                  setSelectedElevator("north");
                  setIsModalOpen(true);
                }}
              >
                Update Status
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* South Elevator */}
        <Grid>
          <Card variant="outlined">
            {/* South Elevator Image */}
            <CardMedia
              sx={{ height: "128px" }}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Southeast_Portland%2C_Oregon_%28January_23%2C_2021%29_-_082.jpg/2560px-Southeast_Portland%2C_Oregon_%28January_23%2C_2021%29_-_082.jpg"
            ></CardMedia>

            {/* South Elevator Content */}
            <CardContent>
              {/* Title */}
              <Typography gutterBottom variant="h5">
                South Elevator
              </Typography>

              {/* Current Status */}
              <Stack direction="row">
                {/* Status */}
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  pr={1}
                >
                  Status:
                </Typography>

                {/* Status Loader */}
                {southElevatorIsBroken === undefined ? (
                  <Skeleton />
                ) : (
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {southElevatorIsBroken ? "Broken" : "Operational"}
                  </Typography>
                )}
              </Stack>

              {/* Last Updated Date */}
              <Stack direction="row">
                {/* Last Updated */}
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  pr={1}
                >
                  Last updated:
                </Typography>

                {/* Last Updated Loader */}
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {southElevatorTimestampUpdated === undefined ? (
                    <Skeleton />
                  ) : (
                    new Date(
                      southElevatorTimestampUpdated * 1000
                    ).toLocaleString()
                  )}
                </Typography>
              </Stack>
            </CardContent>

            {/* South Elevator Update Button */}
            <CardActions>
              <Button
                disabled={southElevatorTimestampUpdated === undefined}
                onClick={() => {
                  setSelectedElevator("south");
                  setIsModalOpen(true);
                }}
              >
                Update Status
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      {/* Update Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Modal Title and Close Button */}
        <DialogTitle>Update Status</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setIsModalOpen(false)}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 11,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>

        {/* Modal Content */}
        <DialogContent>
          <DialogContentText>
            <Typography>
              Is the {selectedElevator} elevator currently broken?
            </Typography>
          </DialogContentText>
        </DialogContent>

        {/* Modal Action Buttons */}
        <DialogActions>
          <Button
            color="success"
            onClick={() => updateData(selectedElevator, false)}
          >
            No
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => updateData(selectedElevator, true)}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
