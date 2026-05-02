import type { MovieDetail } from "@/interface/interface";
import { FacebookIcon, Instagram, Twitter, Youtube } from "lucide-react";

const MovieDetailsSidebar = ({
  movieDetails,
}: {
  movieDetails: MovieDetail | null;
}) => {
  return (
    <div>
      <div className="flex gap-4 justify-start pb-4">
        <FacebookIcon />
        <Instagram />
        <Twitter />
        <Youtube />
      </div>
      <div className="grid grid-cols-1 gap-6 text-sm">
        <div>
          <p className="font-bold">Status</p>
          <p className="text-slate-400">{movieDetails?.status}</p>
        </div>
        <div>
          <p className="font-bold">Original Language</p>
          <p className="text-slate-400">{movieDetails?.original_language}</p>
        </div>
        <div>
          <p className="font-bold">Budget</p>
          <p className="text-slate-400">{movieDetails?.budget}</p>
        </div>
        <div>
          <p className="font-bold">Revenue</p>
          <p className="text-slate-400">{movieDetails?.revenue}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSidebar;
