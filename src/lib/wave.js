
function Point(index, x, y, speed) {
  this.x = x;
  this.y = y;
  this.fixedY = y;
  this.speed = speed;
  this.currentPoint = index;
  this.max = Math.random() * 100 + 15;
}

Point.prototype.update = function() {
  this.currentPoint += this.speed;
  this.y = this.fixedY + (Math.sin(this.currentPoint) * this.max);
};

function Wave(index, {totalPoints, speed, gradColor}) {
  this.index = index;
  this.totalPoints = totalPoints;
  this.color = gradColor;
  this.speed = speed;
  this.points = [];
}

Wave.prototype.resize = function(stageWidth, stageHeight) {
  this.stageWidth = stageWidth;
  this.stageHeight = stageHeight;
  this.centerX = stageWidth / 2;
  this.centerY = stageHeight / 2;
  this.pointGap = this.stageWidth / (this.totalPoints - 1);
  this.init(this.speed);
};

Wave.prototype.init = function(speed) {
  this.points = [];

  for (let i = 0; i < this.totalPoints; i++) {
    const point = new Point(this.index + i, this.pointGap * i, this.centerY, speed);
    this.points[i] = point;
  }
};

Wave.prototype.draw = function(context) {
  const gradient = context.createLinearGradient(0, 0, this.stageWidth, 0);

  for (let i = 0; i < this.color.length; i++) {
    gradient.addColorStop((1 / this.color.length) * i, this.color[i]);
  }

  context.beginPath();
  context.fillStyle = gradient;

  if (this.points.length < 1) return;

  let prevX = this.points[0].x;
  let prevY = this.points[0].y;

  context.moveTo(prevX, prevY);

  for (let i = 1; i < this.totalPoints; i++) {
    if (i < this.totalPoints - 1) {
      this.points[i].update();
    }

    const currentX = (prevX + this.points[i].x) / 2;
    const currentY = (prevY + this.points[i].y) / 2;

    context.quadraticCurveTo(prevX, prevY, currentX, currentY);

    prevX = this.points[i].x;
    prevY = this.points[i].y;
  }

  context.lineTo(prevX, prevY);
  context.lineTo(this.stageWidth, this.stageHeight);
  context.lineTo(this.points[0].x, this.stageHeight);
  context.fill();
  context.closePath();
};

function WaveGroup() {
  this.wavesConfig = [
    {
      totalPoints: 7,
      gradColor: ['rgba(222, 44, 70, 0.9)', 'rgb(44, 47, 142, 0.9)'],
      speed: 0.003,
    },
    {
      totalPoints: 10,
      gradColor: ['rgba(222, 44, 70, 0.5)', 'rgb(44, 47, 142, 0.5)'],
      speed: 0.001,
    },
  ];
  this.totalWaves = this.wavesConfig.length;
  this.waves = [];

  for (let i = 0; i < this.totalWaves; i++) {
    const wave = new Wave(i, this.wavesConfig[i] || this.wavesConfig[0]);
    this.waves[i] = wave;
  }
}

WaveGroup.prototype.resize = function(stageWidth, stageHeight) {
  this.waves.forEach(wave => wave.resize(stageWidth, stageHeight));
};

WaveGroup.prototype.draw = function(context) {
  this.waves.forEach(wave => wave.draw(context));
};

/**
 *
 * @param {Boolean} enableAnim
 */
function Main(enableAnim = false) {
  this.enableAnim = enableAnim;
  this.anchor = document.body;
  this.canvas = document.getElementById('g-wave-canvas') || document.createElement('canvas');
  this.canvas.id = 'g-wave-canvas';
  this.canvas.classList.add('g-wave-background');
  this.context = this.canvas.getContext('2d');
  this.anchor.appendChild(this.canvas);

  this.wavegroup = new WaveGroup();

  window.addEventListener('resize', this.resize.bind(this));
  this.resize();

  requestAnimationFrame(this.animate.bind(this));
}

Main.prototype.resize = function() {
  this.stageWidth = this.anchor.clientWidth;
  this.stageHeight = 300;
  this.canvas.width = this.stageWidth * 2;
  this.canvas.height = this.stageHeight * 2;
  this.context.scale(2, 2);
  this.wavegroup.resize(this.stageWidth, this.stageHeight);

  if (!this.enableAnim) {
    requestAnimationFrame(this.animate.bind(this));
  }
};

Main.prototype.animate = function () {
  this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);
  this.wavegroup.draw(this.context);

  if (this.enableAnim) {
    requestAnimationFrame(this.animate.bind(this));
  }
};

export default Main;
