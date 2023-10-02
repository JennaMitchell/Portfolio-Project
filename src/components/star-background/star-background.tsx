import { MouseEvent, useEffect } from "react";
import { useRef, useState, useCallback } from "react";

type StarData = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
};

const StarBackground = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [starsData, setStarsData] = useState<StarData[]>([]);
  const [usersMousePosition, setUsersMousePosition] = useState({ x: 0, y: 0 });

  const FPS = 60;
  const [starDataInitialized, setStarsDataInitialized] = useState(false);
  const [tickFunctionInitialized, setTickFunctionInitialized] = useState(false);
  const [canvasInitialized, setCanvasInitalized] = useState(false);
  const [intervalTrigger, setIntervalTrigger] = useState<string | number>("a");

  const distance = useCallback(
    (point1: { x: number; y: number }, point2: { x: number; y: number }) => {
      let xs = 0;
      let ys = 0;

      xs = point2.x - point1.x;
      xs = xs * xs;

      ys = point2.y - point1.y;
      ys = ys * ys;

      return Math.sqrt(xs + ys);
    },
    []
  );

  const draw = useCallback(
    (mousePosition: { x: number; y: number }) => {
      // Drawing the scene

      if (starDataInitialized) {
        const possibleNullCanvasRef = canvasRef.current;
        if (possibleNullCanvasRef) {
          const notNullCanvasRef = possibleNullCanvasRef;

          const possibleNullCtx = notNullCanvasRef.getContext("2d");
          if (possibleNullCtx) {
            const ctx = possibleNullCtx;
            ctx.clearRect(
              0,
              0,
              notNullCanvasRef.width,
              notNullCanvasRef.height
            );

            ctx.globalCompositeOperation = "lighter";
            // drawing the dots and paths to dots
            for (
              let indexOfDrawStar = 0;
              indexOfDrawStar < starsData.length;
              indexOfDrawStar++
            ) {
              const star = starsData[indexOfDrawStar];

              ctx.fillStyle = "#fff";
              ctx.beginPath();
              ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
              ctx.fill();
              ctx.fillStyle = "black";
              ctx.stroke();
            }
            // drawing the cursors dot

            for (
              let indexOfMovingStar = 0;
              indexOfMovingStar < starsData.length;
              indexOfMovingStar++
            ) {
              const movingStar = starsData[indexOfMovingStar];
              ctx.moveTo(movingStar.x, movingStar.y);

              if (distance(mousePosition, movingStar) < 150) {
                ctx.lineTo(mousePosition.x, mousePosition.y);
              }
              for (
                let indexOfNextStar = 0;
                indexOfNextStar < starsData.length;
                indexOfNextStar++
              ) {
                const neighborStar = starsData[indexOfNextStar];
                if (distance(movingStar, neighborStar) < 200) {
                  //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
                  ctx.lineTo(neighborStar.x, neighborStar.y);
                }
              }
            }
            ctx.lineWidth = 0.1;
            ctx.strokeStyle = "white";
            ctx.stroke();
          }
        }
      }
    },
    [distance, starsData, starDataInitialized]
  );

  // Update star locations

  const update = useCallback(() => {
    const possibleNullCanvasRef = canvasRef.current;
    if (possibleNullCanvasRef) {
      const notNullCanvasRef = possibleNullCanvasRef;

      for (
        let starDataIndex = 0;
        starDataIndex < starsData.length;
        starDataIndex++
      ) {
        const activeStar = starsData[starDataIndex];

        activeStar.x += activeStar.vx / FPS;
        activeStar.y += activeStar.vy / FPS;

        if (activeStar.x < 0 || activeStar.x > notNullCanvasRef.width)
          activeStar.vx = -activeStar.vx;
        if (activeStar.y < 0 || activeStar.y > notNullCanvasRef.height)
          activeStar.vy = -activeStar.vy;
      }
    }
  }, [starsData, FPS]);

  const mouseMoveHandler = (e: MouseEvent<HTMLCanvasElement>) => {
    setUsersMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Update and draw

  // useEffect to initializedStarData
  useEffect(() => {
    if (!canvasInitialized) {
      setCanvasInitalized(true);
    }

    if (!starDataInitialized && canvasInitialized) {
      const possibleNullCanvasRef = canvasRef.current;
      if (possibleNullCanvasRef) {
        const notNullCanvasRef = possibleNullCanvasRef;

        notNullCanvasRef.width = window.innerWidth;
        notNullCanvasRef.height = window.innerHeight;
        const starsContainer = [];

        const numberOfStars = 60;

        // Push stars to array
        for (let starIndex = 0; starIndex < numberOfStars; starIndex++) {
          starsContainer.push({
            x: Math.random() * notNullCanvasRef.width,
            y: Math.random() * notNullCanvasRef.height,
            radius: Math.random() * 1 + 1,
            vx: Math.floor(Math.random() * 50) - 25,
            vy: Math.floor(Math.random() * 50) - 25,
          });
        }

        setStarsData(starsContainer);
        setStarsDataInitialized(true);
      }
    }
  }, [starDataInitialized, canvasInitialized]);
  // useEffect to call the tic function
  useEffect(() => {
    setTimeout(() => {
      if (tickFunctionInitialized && starDataInitialized && canvasInitialized) {
        draw(usersMousePosition);
        update();

        if (intervalTrigger === 1) {
          setIntervalTrigger("a");
        } else {
          setIntervalTrigger(1);
        }
      }
      if (!tickFunctionInitialized) {
        setTickFunctionInitialized(true);
      }
    }, 10);
  }, [
    tickFunctionInitialized,
    draw,
    update,
    starDataInitialized,
    canvasInitialized,
    usersMousePosition,
    intervalTrigger,
  ]);

  return (
    <canvas
      id="canvas"
      className="star-canvas"
      onMouseMove={mouseMoveHandler}
      ref={canvasRef}
    ></canvas>
  );
};
export default StarBackground;
