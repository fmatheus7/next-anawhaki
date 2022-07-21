// import { createContext, useContext, useState, useEffect } from "react";
// import { gql, useQuery } from "@apollo/client";
// const UserContext = createContext();

// export const ContextProvider = ({ children }) => {
//   const [dataQuery, setDataQuery] = useState(`ceremonies {
//     title
//     data
//     fotos {
//       url
//     }
//   }`);
//   const [params, setParams] = useState(`ceremonies {
//     title
//     data
//     fotos {
//       url
//     }
//   }`);
//   //   const { data, error, loading } = useQuery(querys);
//   //   const dataTotal = data;
//   const querys = gql`
//     query {
//       ${dataQuery}
//     }
//   `;
//   const fff = () => {
//     return true;
//   };
//   //   function setQueryParams(params) {
//   //     setDataQuery(params);
//   //   }

//   //   useEffect(() => {
//   //     return () => {
//   //       setQueryParams(params);
//   //     };
//   //   }, [params]);

//   return (
//     <UserContext.Provider value={{ dataQuery, querys, fff }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const QueryContext = () => {
//   return useContext(UserContext);
// };
