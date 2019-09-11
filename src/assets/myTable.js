import React from "react";
import data from "../assets/Osrah-long.json";

// const someData = [{ name: "Colin" }, { name: "Ricardo" }];

// const MyTable = () => {
//   const temp = someData.map(o => <li>{o.name}</li>);

//   return (
//     <div>
//       <ul>{temp}</ul>
//     </div>
//   );
// };

// export default MyTable;

export default function MyTable() {
  return (
    <div>
      <h1 align='center'>الاسر المنتجه</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>الاسم</th>
            <th>البطاقه</th>
            <th>الجهة</th>
            <th>التصنيف</th>
            <th>Instagram</th>
            <th>الجوال</th>
            <th>WhatsApp</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr>
              <td>
                <h3>{row.الرقم}</h3>
              </td>
              <td>
                <h3>{row.الاسم}</h3>
              </td>
              <td>
                <h3>{row.البطاقة}</h3>
              </td>
              <td>
                <h3>{row.الجهة}</h3>
              </td>
              <td>
                <h3>{row.التصنيف}</h3>
              </td>
              <td>
                <h4>{row.Instagram}</h4>
              </td>
              <td>
                <h4>{row.الجوال}</h4>
              </td>
              <td>
                <h4>{row.WhatsApp}</h4>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
