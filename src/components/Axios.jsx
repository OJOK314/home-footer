import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const resp = await axios.get("https://dog.ceo/api/breeds/image/random");
        setData(resp.data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      }
    };

    fetchDogImage();
  }, []);


  console.log(data);

  return (
    <div>
      {data ? <img src={data} width={700} alt="Dog" /> : <p>Loading</p>}
    </div>
  );
};
export default Axios;

