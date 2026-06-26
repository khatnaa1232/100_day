from PIL import Image
import sys
import os

paths = sorted(sys.argv[1:])

if not paths:
    raise SystemExit("No slide images provided")

images = []
for path in paths:
    image = Image.open(path).convert("RGB")
    images.append(image)

out = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "slides.pdf")
first, rest = images[0], images[1:]
first.save(out, save_all=True, append_images=rest, resolution=150.0)
print(f"PDF saved: {out}")
