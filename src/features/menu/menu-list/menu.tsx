import React, { useEffect, useState } from "react";
import "./menu.scss";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getMenu } from "../../../firebase/menu/menu";
import { fetchMenu } from "../menu.slice";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const MenuListPage = () => {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.menu.menu);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(menu.map((item) => item.category))];

  const filteredMenu = selectedCategory
    ? menu.filter((item) => item.category === selectedCategory)
    : menu;

  async function fetchMenuData() {
    const menuData = await getMenu();
    dispatch(fetchMenu(menuData));
  }

  useEffect(() => {
    fetchMenuData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Container>
      <div style={{ marginTop: 16 }}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => setSelectedCategory(category)}
            style={{ marginRight: 8, marginTop: 8 }}
          >
            {category}
          </Button>
        ))}
        <Button
          variant="outlined"
          style={{ marginTop: 8 }}
          onClick={() => setSelectedCategory(null)}
        >
          Clear
        </Button>
      </div>
      <Grid container spacing={3} style={{ marginTop: 16 }}>
        {filteredMenu.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Link
              to={`/menu-item/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card className="cardDishes" style={{ height: 300 }}>
                <CardMedia
                  component="img"
                  height="150"
                  image={item.imageUrl}
                  alt={item.name}
                />
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "40%",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: 8 }}>
                    Price: {item.price} RON
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MenuListPage;
