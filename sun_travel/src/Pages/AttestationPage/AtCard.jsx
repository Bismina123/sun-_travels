import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AtCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: "100%", marginBottom: "30px" }}>
      <CardHeader
        title="EDUCATION CERTIFICATE"
        subheader="Global Educational Certificate Attestation Services by Sun International Tours and Travels"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Education Certificate"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Sun International Tours specializes in providing comprehensive
          educational certificate attestation services, facilitating seamless
          transitions for individuals aspiring to pursue opportunities abroad.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Service Offerings:</Typography>
          <Typography paragraph>
            Our streamlined process ensures that your certificates undergo the
            necessary verification steps, including sealing and signing by
            appropriate authorities. The attestation enhances the credibility
            and accessibility of your documents, opening up a plethora of
            opportunities for higher education and employment.
          </Typography>
          <Typography paragraph>Why Choose Sun International?</Typography>
          <Typography paragraph>
            Sun International Tours and Travels, with its commitment to
            excellence, provides a complete guide to certificate attestation.
            Our services ensure that your educational documents are not only
            recognized globally but also hold increased value, making your
            international pursuits smoother and more successful.
          </Typography>
          <Typography>
            Embark on your journey with confidence, knowing that your
            educational certificates are attested with precision and expertise
            by Sun International Tours and Travels.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AtCard;
