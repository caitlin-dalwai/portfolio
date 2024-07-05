

<template>
    <div>
      <canvas ref="canvas" id="main" class="background-canvas"></canvas>

      <div class="container pt-5">
            <h1 style="margin-top: 3%; color: black; font-weight: bolder;">Join me on my path of growth?</h1>
            <h5 style="color:black">Pop me a message</h5>
            <div class="row">
                <div class="col-lg-6">
                    <form id="myForm" action="https://submit-form.com/FBtdQasKq" method="POST" novalidate>
                        <div class="p-3 m-5 border-5 bd-example m-5 mt-0 border-5">
                            <div class="mb-3" style="width: 50%;">
                                <label for="name" class="form-label" id="fCon">Name</label>
                                <br>
                                <input type="text" id="name" name="name" required="`${formVal()}`">
                            </div>
                            <div class="mb-3" style="width: 50%;">
                                <label for="email" class="form-label" id="fCon1">Email address</label>
                                <input type="email" id="email" name="email" placeholder="name@example.com" required="`${formVal()}`">
                            </div>
                            <div class="mb-3" style="width: 50%;">
                                <label for="feedback" class="form-label" id="fCon2">Type your feedback here</label>
                                <textarea id="feedback" name="feedback" rows="3" required="`${formVal()}`"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-success" @click='formVal' >Submit</button>
                            <button type="reset" class="btn">Clear</button>
                        </div>
                    </form>
                </div>
            
            <div class="col-lg-6" style="height: fit-content; color: black;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                      </svg><p>Cape Town, South Africa</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                      </svg><p>dalwaicaitlin@gmail.com</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                      </svg><p>+27 82 701 8105</p>
                </div>
                </div>
            </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'CanvasAnimation',
    mounted() {
      this.canvas = this.$refs.canvas;
      this.context = this.canvas.getContext('2d');
      this.start = Date.now();
      this.animationLoop();
    },
    methods: {
      animationLoop() {
        let time = (Date.now() - this.start) / 1000;
        time = time % 5;
        this.draw(time / 4);
        requestAnimationFrame(this.animationLoop);
      },
      draw(time) {
        let h = this.canvas.height = this.canvas.offsetHeight;
        let w = this.canvas.width = this.canvas.offsetWidth;
  
        this.context.clearRect(0, 0, w, h);
  
        this.context.lineWidth = 3;
        this.context.lineCap = 'round';
  
        this.context.translate(w / 2, h);
        this.context.rotate(-Math.PI / 2);
  
        this.drawLine(0, time);
      },
      drawLine(gen, t) {
        let localTime = Math.min(t, 1);
        let length = this.easeOutQuad(localTime, 0, 200 * Math.pow(.6, gen), 1);
        let thickness = this.easeOutQuad(localTime, 0, 12 * Math.pow(.7, gen), 1);
        thickness = Math.max(.5, thickness);
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.strokeStyle = gen < 7 ? '#502000' : '#0f0';
        this.context.lineWidth = thickness;
        this.context.lineTo(length, 0);
        this.context.stroke();
  
        let nextT = t - .10;
        if (gen < 10 && nextT >= 0) {
          this.context.save();
          this.context.translate(length, 0);
          this.context.rotate(Math.PI / 5);
          this.drawLine(gen + 1, nextT);
          this.context.restore();
  
          this.context.save();
          this.context.translate(length, 0);
          this.context.rotate(-Math.PI / 8);
          this.drawLine(gen + 1, nextT);
          this.context.restore();
        }
      },
      easeOutQuad(t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
      },
  
    formVal(event) {
            event.preventDefault(); 
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let feedback = document.getElementById('feedback').value;

            if (!/^[a-zA-Z ]+$/.test(name)) {
                alert('Please enter a valid name');
                return false;
            }

            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                alert('Please enter a valid email');
                return false;
            }

            if (feedback.length < 1) {
                alert('Please provide feedback');
                return false;
            }

            document.getElementById('myForm').submit();
        }
    
    }
  };
  </script>
  
  <style scoped>
  .ground {
  bottom: 0;
  height: 20%;
  left: 0;
  position: absolute;
  right: 0;
}

canvas {
  bottom: 0;
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
.background-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1; 
}
@media only screen and (max-width: 300px) {
    /* Adjust layout for small screen */
    .container {
      padding: 10px;
    }
    .row {
      flex-direction: column;
    }
    .col-lg-6 {
      width: 100%;
    }
    .background-canvas {
      display: none !important;
    }
    h1 {
      font-size: 18px;
    }
    h5 {
      font-size: 14px;
    }
    form {
      padding: 10px;
    }
    .mb-3 {
      width: 100%;
    }
    label {
      font-size: 12px;
      width: 100%;
    }
    input, textarea {
      font-size: 10px;
    }
    button {
      font-size: 12px;
    }
    svg {
      width: 12px;
      height: 12px;
    }
    p {
      font-size: 12px;
    }
  }
  </style>
  