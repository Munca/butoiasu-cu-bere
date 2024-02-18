import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import { Menu } from "../../../models/menu.model";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { getMenuItemById } from "../../../firebase/menu/menu";
import SellIcon from "@mui/icons-material/Sell";
const MenuItemDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const [selectedItem, setSelectedItem] = useState<Menu | undefined>(undefined);

  const navigation = useNavigate();

  const fetchMenuItemById = async () => {
    const menuItem = await getMenuItemById(id);
    setSelectedItem(menuItem);
  };

  useEffect(() => {
    fetchMenuItemById();
  }, [selectedItem, navigation]);

  if (!selectedItem) {
    return (
      <Container>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Item not found
          </Typography>
          <Button
            variant="outlined"
            onClick={() => navigation("/menu")}
            style={{ width: 150 }}
          >
            Go back
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        {selectedItem.name}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card
            style={{
              padding: 16,
              marginBottom: 30,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#F5F5F5",
              borderRadius: 16,
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <RestaurantMenuIcon /> Nota bucatarului:
              </Typography>
              <Typography variant="h6">{selectedItem.chefNote}</Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Ingrediente:
              </Typography>
              <Grid container spacing={1}>
                {selectedItem.ingredients
                  .split(",")
                  .map((ingredient, index) => (
                    <Grid item key={index}>
                      <Chip label={ingredient.trim()} />
                    </Grid>
                  ))}
              </Grid>
            </CardContent>
            <Typography
              variant="h5"
              style={{ color: "#3f51b5", fontWeight: "bold", paddingLeft: 16 }}
            >
              Price: {selectedItem.price} RON{" "}
              <SellIcon style={{ paddingRight: 8 }} />
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={selectedItem.imageUrl}
            alt={selectedItem.name}
            style={{ width: "100%", borderRadius: 16 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MenuItemDetailPage;
