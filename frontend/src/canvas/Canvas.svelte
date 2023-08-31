<script>
  export let width = 300;
  export let height = 300;
  let canvas;
  let context;
  export let color;
  export let lineWidth;

  export let background = "#fff";
  export let guessImage;

  let isDrawing;
  let start;

  let t, l;

  $: if (canvas) {
    context = canvas.getContext("2d");
    handleSize();
  }

  $: if (context) {
    context.strokeStyle = color;
  }

  $: if (context) {
    context.lineWidth = lineWidth;
  }

  const canvasToImage = () => {
    const image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
  };

  const handleStart = ({ offsetX: x, offsetY: y }) => {
    // if(color === background) {
    // 	context.clearRect(0, 0, width, height)
    // } else {
    // 	isDrawing = true
    // 	start = { x, y }
    // }
    isDrawing = true;
    start = { x, y };
  };

  const handleEnd = () => {
    isDrawing = false;
    guessImage(canvasToImage());
  };
  const handleMove = ({ offsetX: x1, offsetY: y1 }) => {
    if (!isDrawing) return;

    const { x, y } = start;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x1, y1);
    context.closePath();
    context.stroke();

    start = { x: x1, y: y1 };
  };

  const handleSize = () => {
    const { top, left } = canvas.getBoundingClientRect();
    t = top;
    l = left;
  };
</script>

<svelte:window on:resize="{handleSize}" />

<canvas
  width="{width}"
  height="{height}"
  style:background="{background}"
  bind:this="{canvas}"
  on:mousedown="{handleStart}"
  on:touchstart="{(e) => {
    const { clientX, clientY } = e.touches[0];
    handleStart({
      offsetX: clientX - l,
      offsetY: clientY - t,
    });
  }}"
  on:mouseup="{handleEnd}"
  on:touchend="{handleEnd}"
  on:mouseleave="{handleEnd}"
  on:mousemove="{handleMove}"
  on:touchmove="{(e) => {
    const { clientX, clientY } = e.touches[0];
    handleMove({
      offsetX: clientX - l,
      offsetY: clientY - t,
    });
  }}"
></canvas>
