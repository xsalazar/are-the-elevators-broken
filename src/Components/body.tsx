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
import Link from "@mui/material/Link";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import bypassImageUrl from "../assets/detour-map-pbot.png";

export default function Body() {
  // Check if loading with query params
  const queryParams = new URLSearchParams(window.location.search);
  let elevator = "north";
  let modalOnLoad = false;
  if (queryParams.has("elevator")) {
    let param = queryParams.get("elevator");
    if (param === "north" || param === "south") {
      elevator = param;
      modalOnLoad = true;
    }
  }

  // Update Status Modal
  const [isUpdateStatusModalOpen, setIsUpdateStatusModalOpen] =
    useState(modalOnLoad);
  const [selectedElevator, setSelectedElevator] = useState<string>(elevator);

  // Learn More Modal
  const [isLearnMoreModalOpen, setIsLearnMoreModalOpen] = useState(false);

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

  // Update API Data
  const updateData = async (elevator: string, isBroken: boolean) => {
    const response = (await axios.put(api, { elevator, isBroken })).data;

    setNorthElevatorIsBroken(response.north.isBroken);
    setNorthElevatorTimestampUpdated(response.north.timestampUpdated);

    setSouthElevatorIsBroken(response.south.isBroken);
    setSouthElevatorTimestampUpdated(response.south.timestampUpdated);

    setIsUpdateStatusModalOpen(false);
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
      <Stack direction="column" width="100%" pt={2}>
        <Typography variant="h4" gutterBottom>
          Are the elevators broken?
        </Typography>

        {/* Main Cards */}
        <Grid container size={1} direction="column" spacing={2}>
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
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", width: "50%" }}
                  >
                    {northElevatorIsBroken === undefined ? (
                      <Skeleton />
                    ) : northElevatorIsBroken ? (
                      "Broken"
                    ) : (
                      "Operational"
                    )}
                  </Typography>
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
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", width: "50%" }}
                  >
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
                    setIsUpdateStatusModalOpen(true);
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
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", width: "50%" }}
                  >
                    {southElevatorIsBroken === undefined ? (
                      <Skeleton />
                    ) : southElevatorIsBroken ? (
                      "Broken"
                    ) : (
                      "Operational"
                    )}
                  </Typography>
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
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", width: "50%" }}
                  >
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
                    setIsUpdateStatusModalOpen(true);
                  }}
                >
                  Update Status
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        {/* Learn More */}
        <Link
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setIsLearnMoreModalOpen(true);
          }}
          variant="caption"
        >
          Learn more
        </Link>
      </Stack>

      {/* Update Modal */}
      <Dialog
        open={isUpdateStatusModalOpen}
        onClose={() => setIsUpdateStatusModalOpen(false)}
      >
        {/* Modal Title and Close Button */}
        <DialogTitle>Update Status</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setIsUpdateStatusModalOpen(false)}
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

      {/* Learn More Modal */}
      <Dialog
        open={isLearnMoreModalOpen}
        onClose={() => setIsLearnMoreModalOpen(false)}
      >
        {/* Modal Title and Close Button */}
        <DialogTitle>Learn More</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setIsLearnMoreModalOpen(false)}
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
              The two elevators located on the north and south ends of the Bob
              Stacey Crossing are frequently broken, unfortunately. This website
              operates on a community-driven reporting system to allow for
              people to quickly check if the elevators are broken before
              arriving.
            </Typography>
            <br />
            <Typography>
              When the trains are blocking the street level crossings, and the
              elevators are broken, it's likely that you will need to detour far
              out of your way to get around. Now you can know this information
              before arriving.
            </Typography>
            <br />
            <img src={bypassImageUrl} width="100%" />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
