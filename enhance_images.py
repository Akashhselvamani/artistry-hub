import os
from PIL import Image, ImageFilter

base_dir = r"c:\Users\akash\OneDrive\Desktop\New folder\artistry-hub"
portfolio_dir = os.path.join(base_dir, "src", "assets", "portfolio")

if not os.path.exists(portfolio_dir):
    print("Portfolio directory not found.")
    exit()

# List all files in the portfolio directory
files = [f for f in os.listdir(portfolio_dir) if f.endswith(".jpg") or f.endswith(".jpeg")]

print(f"Found {len(files)} images to enhance...")

for filename in files:
    path = os.path.join(portfolio_dir, filename)
    img = Image.open(path)
    
    original_size = img.size
    # We want to upscale the images by 3x to ensure they have enough resolution for retina/mobile screens
    new_width = original_size[0] * 3
    new_height = original_size[1] * 3
    
    # Upscale using high-quality Lanczos resampling
    # In Pillow 9+, use Image.Resampling.LANCZOS. In older versions, use Image.LANCZOS.
    try:
        resample_filter = Image.Resampling.LANCZOS
    except AttributeError:
        resample_filter = Image.LANCZOS
        
    upscaled = img.resize((new_width, new_height), resample=resample_filter)
    
    # Apply Unsharp Mask to enhance details and remove softness from scaling
    # radius=2, percent=120, threshold=2 is a good setting for faces/portraits to keep skin smooth but eyes/jewelry sharp
    enhanced = upscaled.filter(ImageFilter.UnsharpMask(radius=2, percent=120, threshold=2))
    
    # Save the enhanced image, replacing the old one
    enhanced.save(path, "JPEG", quality=95)
    print(f"  Enhanced {filename}: {original_size} -> {enhanced.size}")

print("All images successfully enhanced!")
