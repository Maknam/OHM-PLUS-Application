import React from 'react';
import OmheroDevice3D from './OmheroDevice';

export default function OmheroShowcase3D() {
  return (
    <div className="w-full py-8">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Essential Model */}
        <div className="bg-gradient-to-b from-gray-900/50 to-gray-800/30 rounded-2xl p-4 backdrop-blur-sm border border-gray-700">
          <OmheroDevice3D model="PCH-0001" />
          <div className="text-center mt-6">
            <h3 className="text-2xl font-bold text-white mb-2">Omhero Essential</h3>
            <p className="text-muted-foreground">Single-Phase | Perfect for Homes</p>
            <div className="mt-4 flex justify-center gap-6">
              <div className="text-center">
                <div className="text-primary text-xl font-bold">110-240V</div>
                <div className="text-xs text-muted-foreground">Voltage Range</div>
              </div>
              <div className="text-center">
                <div className="text-primary text-xl font-bold">±1%</div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Professional Model */}
        <div className="bg-gradient-to-b from-gray-900/50 to-gray-800/30 rounded-2xl p-4 backdrop-blur-sm border border-primary/30">
          <OmheroDevice3D model="PCH-005" />
          <div className="text-center mt-6">
            <h3 className="text-2xl font-bold text-white mb-2">Omhero Professional</h3>
            <p className="text-muted-foreground">3-Phase | For Business & Industry</p>
            <div className="mt-4 flex justify-center gap-6">
              <div className="text-center">
                <div className="text-cyan-500 text-xl font-bold">110-480V</div>
                <div className="text-xs text-muted-foreground">Voltage Range</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-500 text-xl font-bold">±0.5%</div>
                <div className="text-xs text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}