import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then(function (response) {
        setMeals(response.data.meals);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [search]);

  return (
    <div className="w-full bg-slate-50 h-full">
      <div className="container mx-auto">
        <h1 className="py-20 text-4xl font-semibold">MEALS</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Taper le nom d'un plat"
          className="input mb-12 input-bordered w-full max-w-xs"
        />
        <Card meals={meals} />
      </div>
    </div>
  );
}
