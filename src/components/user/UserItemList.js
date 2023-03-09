import React from "react";

export default function UserItemList({ items }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th className="text-white" scope="col-*">
              #
            </th>
            <th className="text-white" scope="col-*">
              Name
            </th>
            <th className="text-white" scope="col-*">
              Username
            </th>
            <th className="text-white" scope="col-*">
              Email
            </th>
            <th className="text-white" scope="col-*">
              Address
            </th>
            <th className="text-white" scope="col-*">
              Phone
            </th>
            <th className="text-white" scope="col-*">
              Website
            </th>
            <th className="text-white" scope="col-*">
              Company
            </th>
          </tr>
        </thead>

        <tbody>
          {items?.map((item, index) => {
            return (
              <tr key={item.id}>
                <th className="text-white align-middle col-*">{index + 1}</th>
                <td className="text-white align-middle col-*">{item.name}</td>
                <td className="text-white align-middle col-*">
                  {item.username}
                </td>
                <td className="text-white align-middle col-*">{item.email}</td>
                <td className="text-white align-middle col-*">
                  {JSON.stringify(item.address)}
                </td>
                <td className="text-white align-middle col-*">{item.phone} </td>
                <td className="text-white align-middle col-*">
                  {item.website}
                </td>
                <td className="text-white align-middle col-*">
                  {JSON.stringify(item.company)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
