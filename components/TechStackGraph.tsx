"use client";

import { useEffect, useRef, useState } from 'react';
import { techNodes, techConnections } from '@/data/stack';

export function TechStackGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const animationRef = useRef<number>(0);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const container = canvas.parentElement;
      if (container) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = container.clientWidth * dpr;
        canvas.height = container.clientHeight * dpr;
        canvas.style.width = `${container.clientWidth}px`;
        canvas.style.height = `${container.clientHeight}px`;
        ctx.scale(dpr, dpr);

        if (techNodes.length > 0) {
          let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
          techNodes.forEach(n => {
            if (n.x < minX) minX = n.x;
            if (n.x > maxX) maxX = n.x;
            if (n.y < minY) minY = n.y;
            if (n.y > maxY) maxY = n.y;
          });
          const graphWidth = maxX - minX;
          const graphHeight = maxY - minY;
          
          // Calculate dynamic offsets to perfectly center the graph
          offsetRef.current.x = (container.clientWidth - graphWidth) / 2 - minX;
          offsetRef.current.y = (container.clientHeight - graphHeight) / 2 - minY;
        }
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const offsetX = offsetRef.current.x;
      const offsetY = offsetRef.current.y;

      // Draw connections
      techConnections.forEach(([fromId, toId]) => {
        const fromNode = techNodes.find((n) => n.id === fromId);
        const toNode = techNodes.find((n) => n.id === toId);
        if (!fromNode || !toNode) return;

        const isHighlighted = hoveredNode === fromId || hoveredNode === toId;

        ctx.beginPath();
        ctx.moveTo(fromNode.x + offsetX, fromNode.y + offsetY);
        ctx.lineTo(toNode.x + offsetX, toNode.y + offsetY);
        ctx.strokeStyle = isHighlighted ? '#818cf8' : '#3f3f46';
        ctx.lineWidth = isHighlighted ? 2 : 1;
        ctx.globalAlpha = isHighlighted ? 1 : 0.3;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      // Draw nodes
      techNodes.forEach((node) => {
        const isHovered = hoveredNode === node.id;
        const isRelated = techConnections.some(
          (c) =>
            (c[0] === node.id && c[1] === hoveredNode) ||
            (c[1] === node.id && c[0] === hoveredNode)
        );

        const color = isHovered || isRelated ? '#818cf8' : '#a1a1aa';

        ctx.beginPath();
        ctx.arc(node.x + offsetX, node.y + offsetY, isHovered ? 8 : 4, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        if (isHovered || isRelated) {
          ctx.beginPath();
          ctx.arc(node.x + offsetX, node.y + offsetY, isHovered ? 12 : 8, 0, Math.PI * 2);
          ctx.strokeStyle = color;
          ctx.globalAlpha = 0.2;
          ctx.stroke();
          ctx.globalAlpha = 1;

          ctx.font = '500 16px "JetBrains Mono"';
          ctx.fillStyle = color;
          ctx.fillText(node.label, node.x + offsetX + 16, node.y + offsetY + 5);
        } else {
          ctx.font = '400 14px "JetBrains Mono"';
          ctx.fillStyle = '#71717a';
          ctx.fillText(node.label, node.x + offsetX + 12, node.y + offsetY + 5);
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [hoveredNode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left);
    const y = (e.clientY - rect.top);

    const offsetX = offsetRef.current.x;
    const offsetY = offsetRef.current.y;

    const node = techNodes.find((n) => {
      const dx = (n.x + offsetX) - x;
      const dy = (n.y + offsetY) - y;
      return Math.sqrt(dx * dx + dy * dy) < 20;
    });

    setHoveredNode(node ? node.id : null);
  };

  return (
    <div className="tech-stack-graph relative w-full h-[500px] md:h-[600px]">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        className="cursor-crosshair w-full h-full"
      />
      <div className="absolute bottom-4 right-6 z-10 text-[10px] font-mono text-text-tertiary pointer-events-none bg-bg-primary/50 backdrop-blur-sm px-2 py-1 rounded">
        Hover nodes to visualize architecture
      </div>
    </div>
  );
}
