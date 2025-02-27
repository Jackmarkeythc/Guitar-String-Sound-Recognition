let mic, fft;

function setup() {
    let canvas = createCanvas(800, 150);
    canvas.parent('visualizer');
    noFill();

    mic = new p5.AudioIn();
    mic.start();

    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
    background(0);

    let spectrum = fft.analyze();
    beginShape();
    for (let i = 0; i < spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();

    detectString(spectrum);
}

function detectString(spectrum) {
    const avgFrequency = spectrum.reduce((a, b) => a + b, 0) / spectrum.length;
    const tuningIndicator = document.getElementById("tuning-indicator");
    const result = document.getElementById("result");

    if (avgFrequency > 0) {
        result.textContent = `Detected Frequency: ${avgFrequency.toFixed(2)} Hz`;
        // Add logic to determine if the string is flat, sharp, or in tune
        if (avgFrequency < 82) {
            tuningIndicator.textContent = "Tuning: Flat";
        } else if (avgFrequency > 329) {
            tuningIndicator.textContent = "Tuning: Sharp";
        } else {
            tuningIndicator.textContent = "Tuning: In Tune";
        }
    } else {
        result.textContent = "No sound detected, try again.";
        tuningIndicator.textContent = "Tuning: -";
    }
}
