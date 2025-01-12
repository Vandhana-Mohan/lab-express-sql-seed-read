import { Link } from "react-router-dom";

function Song({ song }) {
  return (
    <tr>
      <td className="border px-4 py-2">{song.id}</td>
      <td className="border px-4 py-2">
        <Link
          to={`/songs/${song.id}`}
          className="text-blue-500 hover:underline"
        >
          {song.name}
        </Link>
      </td>
      <td className="border px-4 py-2">{song.artist}</td>
      <td className="border px-4 py-2">{song.album}</td>
      <td className="border px-4 py-2">{song.time}</td>
      <td className="border px-4 py-2">
        {song.is_favorite ? <span> ⭐️ </span> : <span> &nbsp;&nbsp; </span>}
      </td>
    </tr>
  );
}

export default Song;
