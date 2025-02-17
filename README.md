# Guitar String Sound Recognition

This project demonstrates how to create an interactive 3D model of a Gibson Hummingbird guitar using the Sketchfab Viewer API. Users can click on the guitar strings to play corresponding sounds and see visual feedback.

## Steps to Set Up

### a. Embed the 3D Model
First, ensure you have the embed code for the Gibson Hummingbird model from Sketchfab. Replace `YOUR_MODEL_UID` in the `index.html` file with your model's UID.

### b. Initialize the Sketchfab Viewer API
Load the Sketchfab API and initialize the viewer with your model. This is already set up in the `index.html` file.

### c. Identify and Isolate the Strings
Using the API, identify the mesh nodes corresponding to each string. This may require inspecting the model's structure to get the correct node IDs. Update the `stringNodes` object in the `index.html` file with the correct node IDs.

### d. Add Interactivity
Attach event listeners to each string node to detect clicks. Upon a click, play the corresponding string sound and change the string's color briefly to provide visual feedback. This is handled in the `index.html` file.

### e. Load and Play Sounds
Use the Web Audio API or a JavaScript audio library to load and play the string sounds upon interaction. The sound files should be placed in the `sounds` directory.

### f. Implement Visual Feedback
Change the material or color of the string mesh upon interaction to indicate it has been played. This is implemented in the `index.html` file.

## Directory Structure

```
/workspaces/Guitar-String-Sound-Recognition/
│
├── index.html
├── sounds/
│   ├── E.mp3
│   ├── A.mp3
│   ├── D.mp3
│   ├── G.mp3
│   ├── B.mp3
│   └── highE.mp3
└── README.md
```

## Notes
- Ensure all sound files are correctly named and placed in the `sounds` directory.
- Update the `stringNodes` object in the `index.html` file with the correct node IDs for your model.