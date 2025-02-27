import { BrowserRouter, Routes, Route } from "react-router-dom";
import routers from "@/routers/routers";
import { Suspense } from "react";
import { SideBarProvider } from "@components/contexts/SidebarProvider";
import Sidebar from "@components/Sidebar/Sidebar";

function App() {
  return (
    <SideBarProvider>
      <Sidebar />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routers.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  element={<item.component />}
                  key={index}
                />
              );
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SideBarProvider>
  );
}

export default App;
