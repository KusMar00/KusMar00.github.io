import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";
import { FaSpotify } from "react-icons/fa";

const NowPlaying = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  const client_id = import.meta.env.VITE_CLIENT_ID;
  const client_secret = import.meta.env.VITE_CLIENT_SECRET;
  const refresh_token = import.meta.env.VITE_REFRESH_TOKEN;

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(client_id, client_secret, refresh_token),
    ]).then((results) => {
      setResult(results[0]);
      console.log(result);
      setLoading(false);
    });
  }, []);

  return <div>NowPlaying</div>;
};

export default NowPlaying;
