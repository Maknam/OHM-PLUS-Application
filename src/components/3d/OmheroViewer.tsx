import React, { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

const OmheroDevice = React.lazy(() => import('./OmheroDevice'));

export default function OmheroViewer() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[500px] md:h-[600px] rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)' }}>
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading 3D Model...</p>
          </div>
        </div>
      }
    >
      <OmheroDevice />
    </Suspense>
  );
}