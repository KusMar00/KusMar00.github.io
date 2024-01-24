import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";

const NowPlaying = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});
  const [refresh, setRefresh] = useState(false);

  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
  const client_id = import.meta.env.VITE_CLIENT_ID;
  const client_secret = import.meta.env.VITE_CLIENT_SECRET;
  const refresh_token = import.meta.env.VITE_REFRESH_TOKEN;

  const getNowPlaying = async (client_id, client_secret, refresh_token) => {
    const { access_token } = await getAccessToken(
      client_id,
      client_secret,
      refresh_token
    );
    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  const getAccessToken = async () => {
    const data = new URLSearchParams();
    data.append("grant_type", "refresh_token");
    data.append("refresh_token", refresh_token);
    const basic = btoa(`${client_id}:${client_secret}`);
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    });

    return response.json();
  };

  const getNowPlayingItem = async (client_id, client_secret, refresh_token) => {
    const response = await getNowPlaying(
      client_id,
      client_secret,
      refresh_token
    );
    if (response.status === 204 || response.status > 400) {
      return false;
    }
    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    };
  };

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(client_id, client_secret, refresh_token),
    ]).then((results) => {
      setResult(results[0]);
      setLoading(false);
      const timeoutId = setTimeout(() => {
        setRefresh(() => !refresh);
      }, 30000);
      return () => clearTimeout(timeoutId);
    });
  }, [refresh]);

  return (
    <div className="font-poppins text-white sm:w-[400px] w-full h-[175px] bg-zinc-800 rounded-xl mt-7 p-3 border-2 border-solid border-zinc-800 hover:border-secondary">
      <div className="flex flex-row">
        <FaSpotify className="text-green w-[25px] h-[25px] mr-3" />
        <p>Now Playing</p>
      </div>
      <div className="w-full h-[75px] flex flex-row items-center justify-center">
        {loading && <p className="text-zinc-400">Loading...</p>}
        {!loading && !result.isPlaying && (
          <p className="text-zinc-400">Currently Offline...</p>
        )}
        {!loading && result.isPlaying && (
          <div className="w-full h-[100px] flex flex-row items-center mt-14 border-solid border-[1px] p-3 border-zinc-500 rounded-xl">
            <a href={result.songUrl} target="_blank">
              <img
                className="w-[75px] h-[75px] rounded"
                src={result.albumImageUrl}
                alt="loading"
              />
            </a>
            <div className="ml-5">
              <div className="flex flex-row items-center">
                <Player
                  className="w-[25px]"
                  autoplay
                  loop
                  src="https://lottie.host/ac5cf4e3-44cb-4d81-95a0-159c40d8e8e9/ap9es4Osm0.json"
                />
                <p className="truncate w-[200px] ml-2">{result.title}</p>
              </div>
              <p className="text-zinc-400 truncate w-[200px]">
                {result.artist}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NowPlaying;
