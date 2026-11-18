import React, { useRef, useState } from "react";
import { FaCamera, FaEye, FaImage, FaTimes, FaTrash, FaUser } from "react-icons/fa";
import CameraCapture from "./CameraCapture";

function ProfileImageMenu({ image, onChange, size = 100, accent = "#ea0f96" }) {
  const uploadRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);

  const compressImage = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxSize = 400;
          let { width, height } = img;

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
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", 0.8));
        };
        img.onerror = reject;
        img.src = reader.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    try {
      const dataUrl = await compressImage(file);
      onChange(dataUrl);
    } catch (error) {
      alert("Could not read image. Please try again.");
    }
  };

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <button
        type="button"
        className="pim-avatar-btn"
        onClick={openMenu}
        aria-label="Profile image options"
        style={{
          width: size,
          height: size,
          ["--pim-accent"]: accent,
        }}
      >
        {image ? (
          <img src={image} alt="Profile" />
        ) : (
          <FaUser />
        )}
        <span className="pim-avatar-hint">Tap</span>
      </button>

      <input
        ref={uploadRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleUpload}
      />

      {menuOpen && (
        <div className="pim-overlay" onClick={closeMenu}>
          <div
            className="pim-sheet"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Image options"
          >
            <div className="pim-sheet-header">
              <h3>Profile Photo</h3>
              <button type="button" onClick={closeMenu} aria-label="Close">
                <FaTimes />
              </button>
            </div>

            <button
              type="button"
              className="pim-option"
              disabled={!image}
              onClick={() => {
                closeMenu();
                setViewOpen(true);
              }}
            >
              <FaEye /> View Image
            </button>

            <button
              type="button"
              className="pim-option"
              onClick={() => {
                closeMenu();
                uploadRef.current?.click();
              }}
            >
              <FaImage /> Change Image
            </button>

            <button
              type="button"
              className="pim-option"
              onClick={() => {
                closeMenu();
                setCameraOpen(true);
              }}
            >
              <FaCamera /> Take Image
            </button>

            {image && (
              <button
                type="button"
                className="pim-option danger"
                onClick={() => {
                  onChange("");
                  closeMenu();
                }}
              >
                <FaTrash /> Remove Image
              </button>
            )}
          </div>
        </div>
      )}

      {viewOpen && image && (
        <div className="pim-view-overlay" onClick={() => setViewOpen(false)}>
          <div
            className="pim-view-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="pim-view-close"
              onClick={() => setViewOpen(false)}
              aria-label="Close preview"
            >
              <FaTimes />
            </button>
            <img src={image} alt="Profile preview" />
          </div>
        </div>
      )}

      <CameraCapture
        open={cameraOpen}
        onClose={() => setCameraOpen(false)}
        onCapture={(dataUrl) => onChange(dataUrl)}
      />

      <style>{`
        .pim-avatar-btn {
          position: relative;
          border: 3px solid #e7d0dc;
          border-radius: 50%;
          background: #f7eef3;
          color: var(--pim-accent);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
          padding: 0;
          font-size: ${Math.round(size * 0.36)}px;
          margin: 0 auto;
        }
        .pim-avatar-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pim-avatar-hint {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.45);
          color: #fff;
          font-size: 11px;
          padding: 4px 0 6px;
          line-height: 1;
        }
        .pim-overlay,
        .pim-view-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 21000;
          padding: 16px;
        }
        .pim-view-overlay {
          align-items: center;
        }
        .pim-sheet {
          width: 100%;
          max-width: 420px;
          background: #fff;
          border-radius: 18px;
          padding: 8px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }
        .pim-sheet-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 12px 8px;
        }
        .pim-sheet-header h3 {
          margin: 0;
          font-size: 18px;
          color: #122018;
        }
        .pim-sheet-header button {
          border: none;
          background: transparent;
          font-size: 18px;
          cursor: pointer;
          color: #555;
        }
        .pim-option {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          border: none;
          background: transparent;
          text-align: left;
          padding: 14px 12px;
          border-radius: 12px;
          font-size: 16px;
          color: #1d2d24;
          cursor: pointer;
        }
        .pim-option:hover:not(:disabled) {
          background: #f3f7f4;
        }
        .pim-option:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
        .pim-option.danger {
          color: #d64045;
        }
        .pim-view-box {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: #111;
          border-radius: 16px;
          overflow: hidden;
        }
        .pim-view-box img {
          width: 100%;
          display: block;
          max-height: 80vh;
          object-fit: contain;
          background: #000;
        }
        .pim-view-close {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 2;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default ProfileImageMenu;
