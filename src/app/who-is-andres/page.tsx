import {
  Email,
  Phone,
  Language,
  Work,
  School,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import {
    Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const WhoIsAndres: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3} mt={5}>
        {/* Profile Picture and Basic Information */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="300"
            //   image="your_profile_picture.jpg" // Replace with your actual picture
              src="https://andres-artunduaga.github.io/resume/assets/Andres.png"
              alt="Andrés Artunduaga"
            />
            <CardContent>
              <Typography variant="h5" align="center">
                Andrés Artunduaga
              </Typography>
              <Typography variant="subtitle1" align="center">
                Frontend Developer
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                  <ListItemText primary="andres@r2n.dev"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone />
                  </ListItemIcon>
                  <ListItemText primary="+57 319 503 66 43" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Language />
                  </ListItemIcon>
                  <ListItemText primary="https://r2n.dev" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* About Me and Experience */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              {/* About Me Section */}
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                I am Andrés Artunduaga, a software developer with over 7 years
                of experience in designing and implementing scalable,
                user-friendly web applications. I specialize in frontend
                development using technologies like React, Angular, JavaScript,
                and TypeScript. I am passionate about design systems, component
                reusability, and creating seamless user experiences.
              </Typography>
              <Typography variant="body1" paragraph>
                Throughout my career, I have had the opportunity to collaborate
                effectively in global agile teams, using tools like Git, RESTful
                APIs, and modern web technologies to deliver high-quality
                solutions. I have worked on a variety of projects, from
                migrating applications to new technologies to developing new
                features for existing platforms.
              </Typography>

              <Divider />

              {/* In My Free Time Section */}
              <Typography variant="h4" gutterBottom mt={3}>
                In My Free Time
              </Typography>
              <Typography variant="body1" paragraph>
                When I am not coding, I enjoy spending time with my family and
                friends, playing video games, reading, and learning about new
                cultures.
              </Typography>

              {/* <Divider /> */}

              {/* Experience Section */}
              {/* <Typography variant="h4" gutterBottom mt={3}>
                Experience
              </Typography> */}

              {/* Each job could be a separate Card or a List Item */}
              {/* <List>
                <ListItem>
                  <ListItemIcon>
                    <Work />
                  </ListItemIcon>
                  <ListItemText
                    primary="Senior Frontend Engineer at Proxet"
                    secondary="August 2023 - Present"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Work />
                  </ListItemIcon>
                  <ListItemText
                    primary="Senior Angular Developer at Newre Global Partners"
                    secondary="May 2023 - August 2023"
                  />
                </ListItem> */}
                {/* ... more experience items ... */}
              {/* </List> */}
            </CardContent>
          </Card>
        </Grid>

        {/* Skills and Education */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Skills
              </Typography>
              {/* You could use Chip components, a List, or any other suitable component to display skills */}
              <Box sx={{
                display: 'flex',
                gap: 1,
                flexWrap: 'wrap',
              }}>
                <Chip label="React" />
                <Chip label="Angular" />
                <Chip label="JavaScript" />
                <Chip label="TypeScript" />
                <Chip label="HTML" />
                <Chip label="CSS" />
                {/* ... more skills ... */}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Education
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <School />
                  </ListItemIcon>
                  <ListItemText
                    primary="Universidad del Valle"
                    secondary="B.Sc. in Systems Engineering and Computer Science"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} align="center">
          <Typography variant="h4" gutterBottom>
            Connecting
          </Typography>
          <Link href="https://github.com/andres-artunduaga" target="_blank">
            <GitHub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/andres-artunduaga"
            target="_blank"
          >
            <LinkedIn />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhoIsAndres;
