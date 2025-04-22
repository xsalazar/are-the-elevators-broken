import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
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
  const [northElevatorIsBroken, setNorthElevatorIsBroken] = useState(false);
  const [northElevatorTimestampUpdated, setNorthElevatorTimestampUpdated] =
    useState(0);

  // South Elevator
  const [southElevatorIsBroken, setSouthElevatorIsBroken] = useState(false);
  const [southElevatorTimestampUpdated, setSouthElevatorTimestampUpdated] =
    useState(0);

  // API URL
  const api = "https://36zjfwfk51.execute-api.us-west-2.amazonaws.com/";

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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container size={2} direction="column" spacing={2}>
          <Grid>
            {/* North Elevator */}
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
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Status: {northElevatorIsBroken ? "Broken" : "Operational"}
                </Typography>

                {/* Last Updated Date */}
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Last updated:{" "}
                  {new Date(
                    northElevatorTimestampUpdated * 1000
                  ).toLocaleString()}
                </Typography>
              </CardContent>

              {/* North Elevator Update Button */}
              <CardActions>
                <Button
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
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Status: {southElevatorIsBroken ? "Broken" : "Operational"}
                </Typography>

                {/* Last Updated Date */}
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Last updated:{" "}
                  {new Date(
                    southElevatorTimestampUpdated * 1000
                  ).toLocaleString()}
                </Typography>
              </CardContent>

              {/* South Elevator Update Button */}
              <CardActions>
                <Button
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
      </Box>

      {/* Update Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Modal Title and Close Button */}
        <DialogTitle>Title</DialogTitle>
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
            Is the {selectedElevator} elevator currently broken?
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
