import React, { useEffect, useState } from "react";
import { API_URL } from "./config/apiRequest";
import Layout from "./components/shared/Layout";
import Container from "./components/shared/Container";
import Box from "./components/box/Box";
import BoxTitle from "./components/box/BoxTitle";
import UserItem from "./components/user/UserItem";
import SearchUser from "./components/user/SearchUser";

export default function App() {
  const [items, setItems] = useState([]);
  const [endpoint, setEnpoint] = useState("users");
  const [isLoading, setIsloading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch(`${API_URL}/${endpoint}`);
        if (!response.ok) throw new Error("Network response was not OK");
        const responseJson = await response.json();
        setItems(responseJson);
      } catch (error) {
        console.error(error.message);
        setIsloading(true);
      }
    };

    setTimeout(() => {
      setIsloading(false);
      (async () => await fetchApiData())();
    }, 1500);
  }, [endpoint]);

  console.log(searchValue);

  return (
    <>
      <Layout>
        <Container>
          <Box>
            <BoxTitle title="Daftar pengguna" />
            <div className="row justify-content-end">
              <div className="col-12 col-lg-4 col-md-6 col-sm-8">
                <div className="py-3">
                  <SearchUser
                    title="Mau cari siapa?..."
                    searhValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                </div>
              </div>
            </div>
            <UserItem
              items={items.filter(
                (item) =>
                  item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                  item.username
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
              )}
              isLoading={isLoading}
            />
          </Box>
        </Container>
      </Layout>
    </>
  );
}
