registerPaint(
  "gradient-border",
  class {
    static get inputProperties() {
      return [
        "--border-width",
        "--border-radius",
        "--gradient-start",
        "--gradient-end",
        "--cut-size"
      ];
    }

    paint(ctx, geom, properties) {
      const width = geom.width;
      const height = geom.height;

      const borderWidth =
        parseFloat(properties.get("--border-width")?.toString()) || 4;
      const borderRadius =
        parseFloat(properties.get("--border-radius")?.toString()) || 0;
      const gradientStart =
        properties.get("--gradient-start")?.toString().trim() || "#ff0000";
      const gradientEnd =
        properties.get("--gradient-end")?.toString().trim() || "#0000ff";
      const cutSize = parseFloat(properties.get("--cut-size")?.toString()) || 0;

      // Создание градиента
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, gradientStart);
      gradient.addColorStop(1, gradientEnd);

      // Рисование внешнего прямоугольника с учётом скоса
      ctx.fillStyle = gradient;
      this.#drawCutRect(ctx, 0, 0, width, height, borderRadius, cutSize);
      ctx.fill();

      // Рисование внутреннего прямоугольника для создания рамки
      ctx.globalCompositeOperation = "destination-out";
      this.#drawCutRect(
        ctx,
        borderWidth,
        borderWidth,
        width - 2 * borderWidth,
        height - 2 * borderWidth,
        Math.max(0, borderRadius - borderWidth),
        cutSize
      );
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }

    // Вспомогательная функция для рисования прямоугольника с возможным скосом верхнего левого угла
    #drawCutRect(ctx, x, y, width, height, radius, cutSize) {
      ctx.beginPath();
      if (cutSize > 0) {
        ctx.moveTo(x + cutSize, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(
          x + width,
          y + height,
          x + width - radius,
          y + height
        );
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + cutSize);
        ctx.lineTo(x + cutSize, y);
      } else {
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(
          x + width,
          y + height,
          x + width - radius,
          y + height
        );
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
      }
      ctx.closePath();
    }
  }
);
