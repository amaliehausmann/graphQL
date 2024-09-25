import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Movies } from "./pages/Movies";
import { Search } from "./pages/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Characters } from "./pages/Characters";
import { SingleCharacter } from "./pages/SingleCharacter";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Movies />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/characters" element={<Characters />}></Route>
              <Route path="/singlecharacter/:characterId" element={<SingleCharacter/>}></Route>
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
