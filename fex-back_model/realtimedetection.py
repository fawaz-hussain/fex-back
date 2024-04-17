import cv2
from keras.models import model_from_json
import numpy as np

# Load model architecture and weights (assuming they're in separate files)
json_file = open("emotiondetector.json", "r")
model_json = json_file.read()
json_file.close()
model = model_from_json(model_json)

model.load_weights("emotiondetector.h5")

# Haar cascade for face detection
haar_file = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
face_cascade = cv2.CascadeClassifier(haar_file)

def extract_features(image):
    """Preprocesses an image for model input."""
    feature = np.array(image)
    feature = feature.reshape(1, 48, 48, 1)  # Reshape for grayscale
    return feature / 255.0  # Normalize pixel values

def classify_emotion(prediction):
    """Maps predicted emotion label to good, neutral, or bad."""
    prediction_label = labels[prediction.argmax()]
    emotion_class = None

    if prediction_label in ('happy', 'surprise'):
        emotion_class = 'good'
    elif prediction_label == 'neutral':
        emotion_class = 'neutral'
    else:
        emotion_class = 'bad'

    return emotion_class

# Emotion category labels for display
labels = {0: 'angry', 1: 'disgust', 2: 'fear', 3: 'happy', 4: 'neutral', 5: 'sad', 6: 'surprise'}

# Initialize face tracking variables
face_emotion_counts = {}  # Emotion counts for each face ID and bounding box coordinates
total_counts = {'good': 0, 'neutral': 0, 'bad': 0}  # Total counts of emotions

# Video capture
webcam = cv2.VideoCapture(0)

try:
    while True:
        ret, im = webcam.read()

        if not ret:
            print("Error: Unable to capture frame from webcam")
            break

        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)

        # Process each detected face
        for (x, y, w, h) in faces:
            # Extract face region, resize, and preprocess
            face_image = gray[y:y + h, x:x + w]
            face_image = cv2.resize(face_image, (48, 48))
            img = extract_features(face_image)

            # Make prediction and classify emotion
            pred = model.predict(img)
            emotion_class = classify_emotion(pred)

            # Update emotion counts for the current face ID
            face_id = (x, y, w, h)
            if face_id not in face_emotion_counts:
                face_emotion_counts[face_id] = {'good': 0, 'neutral': 0, 'bad': 0}

            face_emotion_counts[face_id][emotion_class] += 1

            # Update total counts
            total_counts[emotion_class] += 1

            # Draw rectangle and put text on frame (optional)
            cv2.rectangle(im, (x, y), (x + w, y + h), (255, 0, 0), 2)

            # Display predicted emotion category (optional)
            cv2.putText(im, emotion_class, (x - 10, y - 10), cv2.FONT_HERSHEY_COMPLEX_SMALL, 2, (0, 0, 255))

        # Display the frame
        cv2.imshow("Output", im)

        # Print emotion counts for each face
        print("\nEmotion Counts:")
        for face_id, counts in face_emotion_counts.items():
            print(f"face_{face_id}: (good: {counts['good']}, neutral: {counts['neutral']}, bad: {counts['bad']})")

        # Exit on 'q' key press or Esc key
        key = cv2.waitKey(1) & 0xFF
        if key == ord('q') or key == 27:
            break

finally:
    # Print total counts of emotions
    print("\nTotal review count:", total_counts)

    # Release resources
    webcam.release()
    cv2.destroyAllWindows()
