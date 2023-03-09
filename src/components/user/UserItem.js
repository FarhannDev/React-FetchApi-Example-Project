import React from "react";
import Loading from "../shared/Loading";
import UserItemEmpty from "./UserItemEmpty";
import UserItemList from "./UserItemList";

export default function UserItem({ items, isLoading }) {
  return (
    <div className="d-block w-100">
      {isLoading && <Loading />}
      {!isLoading && !items.length && <UserItemEmpty />}
      {!isLoading && items.length > 0 && <UserItemList items={items} />}
    </div>
  );
}
