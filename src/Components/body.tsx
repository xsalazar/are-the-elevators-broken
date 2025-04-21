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
import { useState } from "react";

export default function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                  Status: Open
                </Typography>

                {/* Last Updated Date */}
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Last updated: dd-mm-yyyy
                </Typography>
              </CardContent>

              {/* North Elevator Update Button */}
              <CardActions>
                <Button onClick={() => setIsModalOpen(true)}>
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
                  Status: Closed
                </Typography>

                {/* Last Updated Date */}
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Last updated: dd-mm-yyyy
                </Typography>
              </CardContent>

              {/* South Elevator Update Button */}
              <CardActions>
                <Button onClick={() => setIsModalOpen(true)}>
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
            Is the elevator currently broken?
          </DialogContentText>
        </DialogContent>

        {/* Modal Action Buttons */}
        <DialogActions>
          <Button color="success">No</Button>
          <Button variant="contained" color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
