import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import FeedPage from "./pages/FeedPage";
import MapPage from "./pages/MapPage";
import BusinessDashboard from "./pages/BusinessDashboard";
import BookmarksPage from "./pages/BookmarksPage";

const PAGES = {
  landing: LandingPage,
  feed: FeedPage,
  map: MapPage,
  dashboard: BusinessDashboard,
  bookmarks: BookmarksPage,
};

export default function App() {
  const [page, setPage] = useState("landing");
  const PageComponent = PAGES[page] || LandingPage;

  return (
    <div style={{ fontFamily: "'Syne', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
      <PageComponent navigate={setPage} />
    </div>
  );
}