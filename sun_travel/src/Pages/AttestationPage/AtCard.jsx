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

const AtCard = ({ item }) => {
  const [data, setData] = React.useState(item);
  React.useEffect(() => {
    setData(item);
  }, [item]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      sx={{
        maxWidth: "100%",
        marginBottom: "30px",
        minHeight: 600,
      }}
    >
      <CardHeader title={data.title} subheader={data.subheader} />
      <StyledImage
        component="img"
        height="194"
        image={data.image}
        alt="Education Certificate"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.content}
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
            {data.expandedContent.serviceOfferings}
          </Typography>
          <Typography paragraph>Why Choose Sun International?</Typography>
          <Typography paragraph>
            {data.expandedContent.whyChooseSunInternational}
          </Typography>
          <Typography>{data.expandedContent.conclusion}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AtCard;
const StyledImage = styled(CardMedia)`
    height: 280px;
`