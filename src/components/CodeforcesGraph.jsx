import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CodeforcesGraph = ({ platform, username }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        if (platform === "codeforces") {
          // Fetch Codeforces data
          response = await axios.get(`https://codeforces.com/api/user.rating?handle=${username}`);
          const contests = response.data.result.map((contest) => ({
            contestName: contest.contestName,
            rating: contest.newRating,
            rank: contest.rank,
            // Removed time as per previous requests
          }));
          setData(contests);
        }  if (platform === "leetcode") {
          // Fetch LeetCode data using the provided API
          response = await axios.get(`https://alfa-leetcode-api.onrender.com/${username}/contest`);
          const contests = response.data.contestParticipation.map((contest) => ({
            contestName: contest.contest.title,  // LeetCode contest name
            rating: contest.rating,              // LeetCode contest rating
            rank: contest.ranking,               // LeetCode contest rank
          }));
          setData(contests);
        }
      } catch (error) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [platform, username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="graph-container w-96">
      <h2 className="text-lg font-extrabold text-center">{platform === "codeforces" ? "Codeforces" : "LeetCode"} Rating History</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="contestName" /> */}
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="rating" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CodeforcesGraph;
