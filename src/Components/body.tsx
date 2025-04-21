import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Body() {
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
            <Card variant="outlined">
              <CardMedia
                sx={{ height: "64px" }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Southeast_Portland%2C_Oregon_%28January_23%2C_2021%29_-_082.jpg/2560px-Southeast_Portland%2C_Oregon_%28January_23%2C_2021%29_-_082.jpg"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  North Elevator
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Status: Open
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Update Status</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid>
            <Card variant="outlined">
              <CardMedia
                sx={{ height: "64px" }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Southeast_Portland%2C_Oregon_%28January_23%2C_2021%29_-_082.jpg/2560px-Southeast_Portland%2C_Oregon_%28January_23%2C_2021%29_-_082.jpg"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  South Elevator
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Status: Closed
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Update Status</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
