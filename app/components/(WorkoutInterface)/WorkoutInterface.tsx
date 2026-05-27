"use client";

import React, { useState, useEffect } from "react";
import "./WorkoutInterface.css";

// Type definitions for the workout metrics
interface WorkoutStats {
  bpm: number;
  hrZone: string;
  timeElapsed: string;
  calories: number;
  distance: number;
  pace: string;
}

export const WorkoutInterface: React.FC = () => {
  // Sample state using the high-intensity running data
  const [stats, setStats] = useState<WorkoutStats>({
    bpm: 162,
    hrZone: "Cardio / Peak",
    timeElapsed: "28:45",
    calories: 342,
    distance: 4.2,
    pace: "6:50",
  });

  const [isPaused, setIsPaused] = useState<boolean>(false);

  return (
    <div className="workout-screen">
      {/* Top Header Section */}
      <header className="workout-header">
        <span className="workout-type">Outdoor Run</span>
        <div className="gps-indicator">
          <span className="gps-dot"></span> GPS Connected
        </div>
      </header>

      {/* Primary Metric: Big Time Display */}
      <main className="workout-main-metric">
        <label className="metric-label">TIME ELAPSED</label>
        <div className="time-display">{stats.timeElapsed}</div>
      </main>

      {/* Grid for Secondary Metrics */}
      <section className="workout-grid">
        <div className="metric-card hr-card">
          <label className="metric-label">❤️ HEART RATE</label>
          <div className="metric-value">
            {stats.bpm} <span className="metric-unit">BPM</span>
          </div>
          <span className="hr-zone-tag">{stats.hrZone}</span>
        </div>

        <div className="metric-card">
          <label className="metric-label">🏁 DISTANCE</label>
          <div className="metric-value">
            {stats.distance} <span className="metric-unit">km</span>
          </div>
        </div>

        <div className="metric-card">
          <label className="metric-label">🔥 CALORIES</label>
          <div className="metric-value">
            {stats.calories} <span className="metric-unit">kcal</span>
          </div>
        </div>

        <div className="metric-card">
          <label className="metric-label">⚡ PACE</label>
          <div className="metric-value">
            {stats.pace} <span className="metric-unit">/km</span>
          </div>
        </div>
      </section>

      {/* Bottom Action Controls */}
      <footer className="workout-controls">
        <button
          className={`btn btn-primary ${isPaused ? "paused" : ""}`}
          onClick={() => setIsPaused(!isPaused)}
        >
          {isPaused ? "RESUME" : "PAUSE"}
        </button>
        <button className="btn btn-danger">END</button>
      </footer>
    </div>
  );
};
