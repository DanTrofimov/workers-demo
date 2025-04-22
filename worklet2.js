// mask-shape.js
registerPaint(
  "mask-shape",
  class {
    static get inputProperties() {
      return ["--cut-size"];
    }

    paint(ctx, geom, properties) {
      const width = geom.width;
      const height = geom.height;
      const cutSize = parseFloat(properties.get("--cut-size").toString()) || 0;

      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.moveTo(cutSize, 0);
      ctx.lineTo(width, 0);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.lineTo(0, cutSize);
      ctx.closePath();
      ctx.fill();
    }
  }
);
