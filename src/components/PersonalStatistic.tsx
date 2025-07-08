import React, { useState, useEffect, useRef } from "react";

interface StatData {
  physical: number;
  relationship: number;
  discipline: number;
  mental: number;
  intellect: number;
  ambition: number;
  level: number;
}

interface AnimatedStatisticsProps {
  duration?: number;
  intervalDelay?: number;
}

interface SpeedPoint {
  time: number; // 0-1
  speed: number; // 0-2 (0=stop, 1=normal, 2=double speed)
}

const AnimatedStatistics: React.FC<AnimatedStatisticsProps> = ({
  duration = 8000,
  intervalDelay = 500,
}) => {
  const [showControls, setShowControls] = useState(false);
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [speedCurve, setSpeedCurve] = useState<SpeedPoint[]>([
    { time: 0, speed: 0.2 }, // Start slow
    { time: 0.25, speed: 0.6 }, // Medium
    { time: 0.5, speed: 1.5 }, // Fast
    { time: 0.75, speed: 0.8 }, // Medium
    { time: 1, speed: 0.3 }, // End slow
  ]);

  const [animatedValues, setAnimatedValues] = useState<StatData>({
    physical: 0,
    relationship: 100,
    discipline: 0,
    mental: 0,
    intellect: 0,
    ambition: 0,
    level: 0,
  });

  const animationRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const isDraggingRef = useRef(false);
  const dragIndexRef = useRef<number>(-1);

  const categories = [
    { key: "physical", label: "PHYSICAL", color: "#00ff88" },
    { key: "relationship", label: "RELATIONSHIP", color: "#0088ff" },
    { key: "discipline", label: "DISCIPLINE", color: "#ff4444" },
    { key: "mental", label: "MENTAL", color: "#ffaa00" },
    { key: "intellect", label: "INTELLECT", color: "#ff8800" },
    { key: "ambition", label: "AMBITION", color: "#8844ff" },
  ] as const;

  // Preset speed curves
  const presets: Record<string, SpeedPoint[]> = {
    smooth: [
      { time: 0, speed: 0.1 },
      { time: 0.5, speed: 1.0 },
      { time: 1, speed: 0.1 },
    ],
    dramatic: [
      { time: 0, speed: 0.05 },
      { time: 0.3, speed: 0.2 },
      { time: 0.7, speed: 2.0 },
      { time: 1, speed: 0.05 },
    ],
    linear: [
      { time: 0, speed: 1.0 },
      { time: 1, speed: 1.0 },
    ],
    bounce: [
      { time: 0, speed: 0.1 },
      { time: 0.2, speed: 1.5 },
      { time: 0.4, speed: 0.3 },
      { time: 0.6, speed: 1.8 },
      { time: 0.8, speed: 0.2 },
      { time: 1, speed: 0.1 },
    ],
  };

  // Custom easing based on user-defined speed curve
  const customSpeedEasing = (t: number): number => {
    // Find the two points to interpolate between
    let startPoint = speedCurve[0];
    let endPoint = speedCurve[speedCurve.length - 1];

    for (let i = 0; i < speedCurve.length - 1; i++) {
      if (t >= speedCurve[i].time && t <= speedCurve[i + 1].time) {
        startPoint = speedCurve[i];
        endPoint = speedCurve[i + 1];
        break;
      }
    }

    // Linear interpolation between points
    const segmentProgress =
      (t - startPoint.time) / (endPoint.time - startPoint.time);
    const currentSpeed =
      startPoint.speed + (endPoint.speed - startPoint.speed) * segmentProgress;

    // Apply the speed to create the eased progress
    return Math.pow(t, 2 - currentSpeed);
  };

  // Generate speed curve path for SVG visualization
  const generateSpeedCurvePath = (): string => {
    const width = 300;
    const height = 100;
    const points = speedCurve.map((point) => {
      const x = point.time * width;
      const y = height - (point.speed / 2) * height; // Normalize speed (0-2) to height
      return `${x},${y}`;
    });
    return `M ${points.join(" L ")}`;
  };

  // Handle mouse events for dragging
  const handleMouseDown = (index: number, event: React.MouseEvent) => {
    event.preventDefault();
    isDraggingRef.current = true;
    dragIndexRef.current = index;
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (
      !isDraggingRef.current ||
      !svgRef.current ||
      dragIndexRef.current === -1
    )
      return;

    const rect = svgRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newTime = Math.max(0, Math.min(1, x / 300));
    const newSpeed = Math.max(0, Math.min(2, (100 - y) / 50));

    const newCurve = [...speedCurve];
    newCurve[dragIndexRef.current] = { time: newTime, speed: newSpeed };
    setSpeedCurve(newCurve);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    dragIndexRef.current = -1;
  };

  // Add new point to curve
  const addPoint = (event: React.MouseEvent) => {
    if (!svgRef.current || isDraggingRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newTime = Math.max(0, Math.min(1, x / 300));
    const newSpeed = Math.max(0, Math.min(2, (100 - y) / 50));

    const newPoint = { time: newTime, speed: newSpeed };
    const newCurve = [...speedCurve, newPoint].sort((a, b) => a.time - b.time);
    setSpeedCurve(newCurve);
  };

  // Remove point from curve
  const removePoint = (index: number) => {
    if (speedCurve.length > 2) {
      const newCurve = speedCurve.filter((_, i) => i !== index);
      setSpeedCurve(newCurve);
    }
  };

  // Continuous animation function
  const startContinuousAnimation = () => {
    let animationStartTime = performance.now();
    let isForward = true;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - animationStartTime;
      let progress = Math.min(elapsed / currentDuration, 1);

      // Apply custom speed easing
      const easedProgress = customSpeedEasing(progress);

      // Calculate values based on direction
      const newValues: StatData = {
        physical: isForward ? easedProgress * 100 : 100 - easedProgress * 100,
        relationship: isForward
          ? 100 - easedProgress * 100
          : easedProgress * 100,
        discipline: isForward ? easedProgress * 100 : 100 - easedProgress * 100,
        mental: isForward ? easedProgress * 100 : 100 - easedProgress * 100,
        intellect: isForward ? easedProgress * 100 : 100 - easedProgress * 100,
        ambition: isForward ? easedProgress * 100 : 100 - easedProgress * 100,
        level: isForward ? easedProgress * 100 : 100 - easedProgress * 100,
      };

      setAnimatedValues(newValues);

      if (progress >= 1) {
        isForward = !isForward;
        animationStartTime = currentTime;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // Start continuous animation cycle
  useEffect(() => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    const timer = setTimeout(() => {
      startContinuousAnimation();
    }, intervalDelay);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      isAnimatingRef.current = false;
    };
  }, [currentDuration, intervalDelay, speedCurve]);

  // Generate radar chart points
  const generateRadarPath = (values: StatData) => {
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 150;

    const points = categories.map((category, index) => {
      const angle = (index * 60 - 90) * (Math.PI / 180);
      const value = Math.max(
        0,
        Math.min(100, values[category.key as keyof StatData] as number)
      );
      const radius = (value / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return `${x},${y}`;
    });

    return `M ${points.join(" L ")} Z`;
  };

  // Generate background grid
  const generateGridLines = () => {
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 150;
    const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];

    return gridLevels.map((level, levelIndex) => {
      const points = categories.map((_, index) => {
        const angle = (index * 60 - 90) * (Math.PI / 180);
        const radius = level * maxRadius;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        return `${x},${y}`;
      });

      return (
        <polygon
          key={levelIndex}
          points={points.join(" ")}
          fill="none"
          stroke="#ffff"
          strokeWidth="1"
          opacity={0.3}
        />
      );
    });
  };

  // Generate axis lines
  const generateAxisLines = () => {
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 150;

    return categories.map((_, index) => {
      const angle = (index * 60 - 90) * (Math.PI / 180);
      const endX = centerX + maxRadius * Math.cos(angle);
      const endY = centerY + maxRadius * Math.sin(angle);

      return (
        <line
          key={index}
          x1={centerX}
          y1={centerY}
          x2={endX}
          y2={endY}
          stroke="#cccccc"
          strokeWidth="1"
          opacity={0.3}
        />
      );
    });
  };

  // Generate labels
  const generateLabels = () => {
    const centerX = 200;
    const centerY = 200;
    const labelRadius = 155;

    return categories.map((category, index) => {
      const angle = (index * 60 - 90) * (Math.PI / 180);
      const x = centerX + labelRadius * Math.cos(angle);
      const y = centerY + labelRadius * Math.sin(angle);

      return (
        <text
          key={index}
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="central"
          fill={category.color}
          fontSize="20"
          fontWeight="bold"
          className="font-mono"
        >
          {category.label}
        </text>
      );
    });
  };

  // Global mouse event handlers
  useEffect(() => {
    const handleGlobalMouseMove = (event: MouseEvent) => {
      if (isDraggingRef.current && svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const newTime = Math.max(0, Math.min(1, x / 300));
        const newSpeed = Math.max(0, Math.min(2, (100 - y) / 50));

        const newCurve = [...speedCurve];
        newCurve[dragIndexRef.current] = { time: newTime, speed: newSpeed };
        setSpeedCurve(newCurve);
      }
    };

    const handleGlobalMouseUp = () => {
      isDraggingRef.current = false;
      dragIndexRef.current = -1;
    };

    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [speedCurve]);

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-br from-[#0b0b0d] via-[#0e0e11] to-[#1a1a1f] text-white min-h-screen">
      {/* Speed Control Toggle */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="fixed top-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
      >
        {showControls ? "Hide Controls" : "Speed Controls"}
      </button>

      {/* Speed Control Panel */}
      {showControls && (
        <div className="fixed top-20 left-4 z-50 bg-gray-900 p-4 rounded-lg border border-gray-600 max-w-sm">
          <h3 className="text-lg font-bold mb-4">Animation Speed Curve</h3>

          {/* Preset Buttons */}
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-2">Presets:</p>
            <div className="flex gap-2 flex-wrap">
              {Object.entries(presets).map(([name, curve]) => (
                <button
                  key={name}
                  onClick={() => setSpeedCurve(curve)}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm capitalize"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Speed Curve Editor */}
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-2">Speed Curve Editor:</p>
            <div className="bg-gray-800 p-2 rounded">
              <svg
                ref={svgRef}
                width="300"
                height="100"
                className="border border-gray-600 cursor-crosshair"
                onDoubleClick={addPoint}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                {/* Grid */}
                {[0, 0.25, 0.5, 0.75, 1].map((x) => (
                  <line
                    key={x}
                    x1={x * 300}
                    y1={0}
                    x2={x * 300}
                    y2={100}
                    stroke="#444"
                    strokeWidth="1"
                  />
                ))}
                {[0, 0.5, 1, 1.5, 2].map((speed) => (
                  <line
                    key={speed}
                    x1={0}
                    y1={100 - (speed / 2) * 100}
                    x2={300}
                    y2={100 - (speed / 2) * 100}
                    stroke="#444"
                    strokeWidth="1"
                  />
                ))}

                {/* Speed curve */}
                <path
                  d={generateSpeedCurvePath()}
                  stroke="#00ff88"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Control points */}
                {speedCurve.map((point, index) => (
                  <circle
                    key={index}
                    cx={point.time * 300}
                    cy={100 - (point.speed / 2) * 100}
                    r="4"
                    fill="#00ff88"
                    className="cursor-pointer hover:fill-white"
                    onMouseDown={(e) => handleMouseDown(index, e)}
                    onDoubleClick={(e) => {
                      e.stopPropagation();
                      removePoint(index);
                    }}
                  />
                ))}
              </svg>
              <div className="text-xs text-gray-400 mt-2">
                Double-click to add point • Double-click point to remove • Drag
                to adjust
              </div>
            </div>
          </div>

          {/* Duration Control */}
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-2">
              Duration: {currentDuration / 1000}s
            </p>
            <input
              type="range"
              min="2000"
              max="15000"
              step="500"
              value={currentDuration}
              onChange={(e) => setCurrentDuration(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      )}

      <div className="relative">
        {/* Radar Chart */}
        <svg width="400" height="400" className="mb-8">
          {/* Background Grid */}
          {generateGridLines()}
          {generateAxisLines()}

          {/* Radar Fill */}
          <path
            d={generateRadarPath(animatedValues)}
            fill="rgba(255, 255, 255, 0.1)"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
          />

          {/* Labels */}
          {generateLabels()}
        </svg>

        {/* Center Level Display */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2">
              {Math.round(animatedValues.level)}
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Display */}
      <div className="grid grid-cols-3 gap-8 text-center">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="text-sm font-bold mb-1"
              style={{ color: category.color }}
            >
              {category.label}
            </div>
            <div className="text-4xl text-wh text-white">
              {Math.round(
                animatedValues[category.key as keyof StatData] as number
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStatistics;
