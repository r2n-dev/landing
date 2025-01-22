import { Email, Language, LocationOn, Phone } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="User Profile Picture"
            src="https://via.placeholder.com/150" // Replace with your actual image URL
          />
        }
        title="Your Name"
        subheader="Your Title/Profession"
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid>
            <Typography variant="body2" color="text.secondary">
              <LocationOn sx={{ mr: 1 }} />
              Your Location
            </Typography>
          </Grid>
          <Grid>
            <Link href="mailto:your.email@example.com" color="inherit">
              <Email sx={{ mr: 1 }} />
              your.email@example.com
            </Link>
          </Grid>
          <Grid>
            <Link
              href="https://yourwebsite.com"
              color="inherit"
              target="_blank"
            >
              <Language sx={{ mr: 1 }} />
              yourwebsite.com
            </Link>
          </Grid>
          <Grid>
            <Typography variant="body2" color="text.secondary">
              <Phone sx={{ mr: 1 }} />
              Your Phone Number
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContactPage;
