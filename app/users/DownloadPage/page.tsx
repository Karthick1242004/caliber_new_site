import { Suspense } from "react";
import DownloadPage from "./Download";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DownloadPage />
    </Suspense>
  );
}
