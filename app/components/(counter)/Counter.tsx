"use client";
import "../../styles/counter.css";
import { useState, useRef, useEffect, ChangeEvent } from "react";

export default function Counter() {
  // State to manage the duration input
  const [duration, setDuration] = useState<number | string>("");
  // State to manage the countdown timer value
  const [timeLeft, setTimeLeft] = useState<number>(0);
  // State to track if the timer is active
  const [isActive, setIsActive] = useState<boolean>(false);
  // State to track if the timer is paused
  const [isPaused, setIsPaused] = useState<boolean>(false);
  // Reference to store the timer ID
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle setting the duration of the countdown
  const handleSetDuration = (): void => {
    if (typeof duration === "number" && duration > 0) {
      setTimeLeft(duration); // Set the countdown timer
      setIsActive(false); // Reset active state
      setIsPaused(false); // Reset paused state
      // Clear any existing timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  // Function to start the countdown timer
  const handleStart = (): void => {
    if (timeLeft > 0) {
      setIsActive(true); // Set the timer as active
      setIsPaused(false); // Unpause the timer if it was paused
    }
  };

  // Function to pause the countdown timer
  const handlePause = (): void => {
    if (isActive) {
      setIsPaused(true); // Set the timer as paused
      setIsActive(false); // Set the timer as inactive
      // Clear any existing timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  // Function to reset the countdown timer
  const handleReset = (): void => {
    setIsActive(false); // Set the timer as inactive
    setIsPaused(false); // Set the timer as not paused
    setTimeLeft(typeof duration === "number" ? duration : 0); // Reset the timer to the original duration
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // useEffect hook to manage the countdown interval
  useEffect(() => {
    // If the timer is active and not paused
    if (isActive && !isPaused) {
      // Set an interval to decrease the time left
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          // If time is up, clear the interval
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          // Decrease the time left by one second
          return prevTime - 1;
        });
      }, 1000); // Interval of 1 second
    }
    // Cleanup function to clear the interval
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, isPaused]); // Dependencies array to rerun the effect

  // Function to format the time left into mm:ss format
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60); // Calculate minutes
    const seconds = time % 60; // Calculate seconds
    // Return the formatted string
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0",
    )}`;
  };

  // Function to handle changes in the duration input field
  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDuration(Number(e.target.value) || ""); // Update the duration state
  };

  // JSX return statement rendering the Countdown UI
  return (
    // Container div for centering the content
    <div className="perantContainer">
      {/* Timer box container */}
      <div className="timerBox">
        {/* Input and set button container */}
        <div className="inputStyle ">
          <input
            type="number"
            id="duration"
            placeholder="Enter duration in seconds"
            value={duration}
            onChange={handleDurationChange}
            className=" "
          />
          <button onClick={handleSetDuration} className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              fill="currentColor"
              className="bi bi-stopwatch-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0" />
            </svg>
          </button>
        </div>
        {/* Display the formatted time left */}
        <div className="diplayTime">{formatTime(timeLeft)}</div>
        {/* buttons to start, pause, and reset the timer */}
        <div className=" ">
          <button onClick={handleStart} className=" ">
            {isPaused ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                fill="currentColor"
                className="bi bi-play"
                viewBox="0 0 16 16"
              >
                <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                fill="currentColor"
                className="bi bi-play"
                viewBox="0 0 16 16"
              >
                <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
              </svg>
            )}
          </button>
          <button onClick={handlePause} className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              fill="currentColor"
              className="bi bi-pause"
              viewBox="0 0 16 16"
            >
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
            </svg>
          </button>
          <button onClick={handleReset} className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-counterclockwise"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
