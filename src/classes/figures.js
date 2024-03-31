class NodeFigure {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.position = {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
    };
    this.speed = {
      x: Math.random() * 3 - 1.5,
      y: Math.random() * 3 - 1.5,
    };
    this.size = Math.random() * 20 + 1;
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x > this.canvas.width + this.size) this.position.x = 0;
    else if (this.position.x + this.size < 0)
      this.position.x = this.canvas.width + this.size;

    if (this.position.y > this.canvas.height + this.size) this.position.y = 0;
    else if (this.position.y + this.size < 0)
      this.position.y = this.canvas.height + this.size;
  }

  draw() {
    this.ctx.strokeStyle = "#71717a";
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    this.ctx.stroke();
  }
}

class Particle {
  constructor(ctx, x, y, id) {
    this.ctx = ctx;
    this.alive = true;
    this.id = id;
    this.position = {
      x: x,
      y: y,
    };
    this.speed = {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
    };
    this.size = Math.random() * 30 + 1;

    const randomGray = Math.random() * 255;
    this.color = `rgba(${randomGray}, ${randomGray}, ${randomGray}, ${Math.random()})`;
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.size -= 0.2;
  }

  draw() {
    if (this.size <= 0) {
      this.alive = false;
      return;
    }
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

const maxDistance = 200;

function DrawLineFigure(ctx, firstNode, lastNode) {
  const distance = Math.sqrt(
    Math.pow(lastNode.position.x - firstNode.position.x, 2) +
      Math.pow(lastNode.position.y - firstNode.position.y, 2)
  );

  ctx.strokeStyle = `rgba(63,63,70,${(-1 / maxDistance) * distance + 1})`;
  ctx.beginPath();
  ctx.moveTo(firstNode.position.x, firstNode.position.y);
  ctx.lineTo(lastNode.position.x, lastNode.position.y);
  ctx.stroke();
}

export { NodeFigure, DrawLineFigure, Particle };
