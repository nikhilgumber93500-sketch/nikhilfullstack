import React, { useEffect, useRef, useState } from "react";
import { FaCamera, FaTimes } from "react-icons/fa";

function CameraCapture({ open, onClose, onCapture }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setReady(false);
  };

  useEffect(() => {
    if (!open) {
      stopCamera();
      setError("");
      return;
    }

    let cancelled = false;

    const startCamera = async () => {
      setError("");
      setReady(false);

      if (!navigator.mediaDevices?.getUserMedia) {
        setError("Camera is not supported in this browser.");
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        });

        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
          setReady(true);
        }
      } catch (err) {
        if (cancelled) return;
        if (err.name === "NotAllowedError") {
          setError("Camera permission denied. Please allow camera access.");
        } else if (err.name === "NotFoundError") {
          setError("No camera found on this device.");
        } else {
          setError("Unable to open camera. Please try again.");
        }
      }
    };

    startCamera();

    return () => {
      cancelled = true;
      stopCamera();
    };
  }, [open]);

  const handleCapture = () => {
    const video = videoRef.current;
    if (!video || !ready) return;

    const canvas = document.createElement("canvas");
    const maxSize = 400;
    let width = video.videoWidth || 640;
    let height = video.videoHeight || 480;

    if (width > height && width > maxSize) {
      height = Math.round((height * maxSize) / width);
      width = maxSize;
    } else if (height > maxSize) {
      width = Math.round((width * maxSize) / height);
      height = maxSize;
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    // Mirror selfie to match preview
    ctx.translate(width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, width, height);

    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    stopCamera();
    onCapture(dataUrl);
    onClose();
  };

  const handleClose = () => {
    stopCamera();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="camera-overlay" onClick={handleClose}>
      <div
        className="camera-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Take photo with camera"
      >
        <div className="camera-header">
          <h3>Take Image</h3>
          <button type="button" className="camera-close" onClick={handleClose}>
            <FaTimes />
          </button>
        </div>

        <div className="camera-preview-wrap">
          {error ? (
            <div className="camera-error">{error}</div>
          ) : (
            <video
              ref={videoRef}
              className="camera-preview"
              autoPlay
              playsInline
              muted
            />
          )}
        </div>

        <div className="camera-actions">
          <button
            type="button"
            className="camera-cancel"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="camera-shot"
            onClick={handleCapture}
            disabled={!ready || !!error}
          >
            <FaCamera /> Capture
          </button>
        </div>
      </div>

      <style>{`
        .camera-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20000;
          padding: 16px;
        }
        .camera-modal {
          width: 100%;
          max-width: 480px;
          background: #111;
          border-radius: 16px;
          overflow: hidden;
          color: #fff;
        }
        .camera-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: #1c1c1c;
        }
        .camera-header h3 {
          margin: 0;
          font-size: 18px;
        }
        .camera-close {
          border: none;
          background: transparent;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }
        .camera-preview-wrap {
          background: #000;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .camera-preview {
          width: 100%;
          max-height: 360px;
          object-fit: cover;
          transform: scaleX(-1);
          display: block;
        }
        .camera-error {
          padding: 40px 20px;
          text-align: center;
          color: #ffb4b4;
          font-size: 15px;
        }
        .camera-actions {
          display: flex;
          gap: 10px;
          padding: 14px 16px 18px;
          background: #1c1c1c;
        }
        .camera-cancel,
        .camera-shot {
          flex: 1;
          border: none;
          border-radius: 10px;
          padding: 12px;
          font-size: 15px;
          cursor: pointer;
        }
        .camera-cancel {
          background: #333;
          color: #fff;
        }
        .camera-shot {
          background: #ea0f96;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .camera-shot:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

export default CameraCapture;
