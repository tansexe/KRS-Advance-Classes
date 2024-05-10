import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import NavBar from "../../components/nav bar/NavBar";
import Card from "../../components/home cards/Card";

export default function Home() {
  const [data, setData] = useState([]);

  const bol = false;
  useEffect(() => {
    //waiting api response / database
    
    setTimeout(() => {
      setData([
        {
          name: "Abc",
        },
        {
          name: "123",
        },
        {
          name: "abc",
        },
        {
          name: "hshdd",
        },
      ]);
    }, 2000);
  }, []);
  return (
    <div className="homePage">
      <NavBar />
      <div className="cardShow">
        {data.length !== 0 ? (
          <>
            {data.map((value, index) => {
              return (
                <Card
                  image="https://plus.unsplash.com/premium_photo-1675826774817-fe983ceb0475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  name={value.name}
                  email="21051228@kiit.ac.in"
                />
              );
            })}
          </>
        ) : null}
      </div>
      {bol === true ? (
        <div style={{ backgroundColor: "red" }}>Example</div>
      ) : null}
    </div>
  );
} 