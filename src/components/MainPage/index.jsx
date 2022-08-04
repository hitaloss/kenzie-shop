import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import data from "../../services/fakeApi";
import { useDispatch, useSelector } from "react-redux";
import { addCardThunk, removeCardThunk } from "../../store/module/cart/thunks";
import { useState } from "react";
import Skeletons from "../Skeletons";

function MainPage() {
  const [open, setOpen] = useState(false);
  const food = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(food.cart);
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography flexGrow={1} color="error" variant="h5">
            8 Bites Food
          </Typography>
          <Button
            onClick={() => setOpen(true)}
            size="large"
            color="error"
            startIcon={
              <Badge badgeContent={food.cart.length}>
                <ShoppingCartIcon />
              </Badge>
            }
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
      <Stack marginTop={5} direction="row" minWidth="90%" bgcolor="#222121">
        <Grid container my={4} mx={4} rowSpacing={2} columnSpacing={1}>
          {data.map((item, index) => (
            <Grid xs={12} sm={6} md={4} lg={4} key={index} item>
              <Card>
                <CardMedia
                  component="img"
                  image={item.img}
                  height="140"
                  sx={{
                    alignSelf: "center",
                    justifyContent: "center",
                    width: "150px",
                    m: "auto",
                  }}
                />
                <CardContent>
                  <Typography variant="h4" color="error">
                    {item.title}
                  </Typography>
                  <Typography color="secondary">$ {item.price}</Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    onClick={() => dispatch(addCardThunk(item))}
                    color="secondary"
                    endIcon={<AddShoppingCartIcon />}
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>My Cart</DialogTitle>
        <DialogContent>
          {food.cart.length > 0 ? (
            <List>
              {food.cart.map((item, index) => (
                <Stack key={index}>
                  <Stack>
                    <Divider />
                    <ListItem
                      sx={{
                        paddingRight: {
                          xs: "210px",
                          sm: "280px",
                        },
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <Box
                            component="img"
                            alt={item.title}
                            src={item.img}
                            sx={{
                              width: "30px",
                            }}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.title}
                        secondary={item.price}
                      />
                    </ListItem>
                    <Typography variant="caption" color="error">
                      {item.count < 2
                        ? `${item.count} unit`
                        : `${item.count} units`}
                    </Typography>
                    <Divider />
                  </Stack>
                  <Stack>
                    <Button
                      color="secondary"
                      onClick={() => dispatch(removeCardThunk(item))}
                    >
                      Remove from Cart
                    </Button>
                  </Stack>
                </Stack>
              ))}
            </List>
          ) : (
            <Skeletons />
          )}
        </DialogContent>
        <DialogActions>
          <Typography p={2} variant="h6" flexGrow={1}>
            Total:
          </Typography>
          <Typography p={2} variant="h6" color="error">
            ${" "}
            {food.cart
              .reduce((acc, value) => (acc += value.price * value.count), 0)
              .toFixed(2)}
          </Typography>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MainPage;
