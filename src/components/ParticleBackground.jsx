import React, { useEffect, useRef } from 'react';

export default function ParticleBackground({ isFrozen = false, intense = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle system: Star particles + Rose petals
    const particleCount = window.innerWidth < 768 ? 40 : 75;
    const particles = [];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.2 + 0.6;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = -(Math.random() * 0.5 + 0.2); // Softly float upwards
        this.opacity = Math.random() * 0.7 + 0.2;
        this.fadeSpeed = (Math.random() * 0.008 + 0.004);
        this.increasing = Math.random() > 0.5;
        
        // Is it a subtle petal or stardust
        this.isPetal = Math.random() < 0.25;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.petalWidth = this.size * 3.5;
        this.petalHeight = this.size * 5;
      }

      update() {
        if (isFrozen) return;

        this.x += this.speedX + (intense ? (Math.random() - 0.5) * 0.5 : 0);
        this.y += this.speedY * (intense ? 1.6 : 1);
        this.rotation += this.rotationSpeed;

        if (this.increasing) {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= 0.85) this.increasing = false;
        } else {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0.1) this.increasing = true;
        }

        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.x = Math.random() * width;
          this.y = height + 10;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));

        if (this.isPetal) {
          // Romantic rose petal
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          ctx.fillStyle = intense ? 'rgba(235, 110, 140, 0.55)' : 'rgba(215, 75, 105, 0.35)';
          ctx.beginPath();
          ctx.ellipse(0, 0, this.petalWidth, this.petalHeight, Math.PI / 4, 0, 2 * Math.PI);
          ctx.fill();
        } else {
          // Golden / rose stardust
          ctx.fillStyle = intense ? 'rgba(245, 215, 150, 0.8)' : 'rgba(255, 220, 230, 0.6)';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();

          // Subtle glow around particle
          ctx.fillStyle = intense ? 'rgba(245, 215, 150, 0.15)' : 'rgba(244, 166, 182, 0.12)';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isFrozen, intense]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-1000"
      style={{ opacity: isFrozen ? 0.4 : 0.85 }}
    />
  );
}
