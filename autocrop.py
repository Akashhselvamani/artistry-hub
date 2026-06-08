import os
from PIL import Image

base_dir = r"c:\Users\akash\OneDrive\Desktop\New folder\artistry-hub"
brain_dir = r"C:\Users\akash\.gemini\antigravity\brain\5ad11c7a-0035-4633-8800-b7f1b30dd410"
output_dir = os.path.join(base_dir, "src", "assets", "portfolio")

os.makedirs(output_dir, exist_ok=True)

images = [
    "media__1780893202652.jpg",
    "media__1780893202668.jpg",
    "media__1780893202690.jpg",
    "media__1780893202711.jpg"
]

def find_borders(img, threshold=230):
    width, height = img.size
    pixels = img.load()
    
    white_rows = []
    for y in range(height):
        white_count = 0
        for x in range(width):
            pixel = pixels[x, y]
            r, g, b = pixel[0], pixel[1], pixel[2]
            if r >= threshold and g >= threshold and b >= threshold:
                white_count += 1
        if white_count > width * 0.93: # 93% of row pixels are white
            white_rows.append(y)
            
    white_cols = []
    for x in range(width):
        white_count = 0
        for y in range(height):
            pixel = pixels[x, y]
            r, g, b = pixel[0], pixel[1], pixel[2]
            if r >= threshold and g >= threshold and b >= threshold:
                white_count += 1
        if white_count > height * 0.93: # 93% of col pixels are white
            white_cols.append(x)
            
    def group_lines(lines):
        if not lines:
            return []
        groups = []
        current = [lines[0]]
        for l in lines[1:]:
            if l == current[-1] + 1:
                current.append(l)
            else:
                groups.append(int(sum(current) / len(current)))
                current = [l]
        groups.append(int(sum(current) / len(current)))
        return groups

    return group_lines(white_rows), group_lines(white_cols)

# We can crop the sub-images based on these horizontal and vertical cuts
for idx, name in enumerate(images):
    path = os.path.join(brain_dir, name)
    if not os.path.exists(path):
        print(f"Skipping {name}, not found.")
        continue
        
    img = Image.open(path)
    h_cuts, v_cuts = find_borders(img, threshold=235)
    
    # Include borders of the image as cuts
    h_cuts = [0] + sorted(h_cuts) + [img.height]
    v_cuts = [0] + sorted(v_cuts) + [img.width]
    
    print(f"Image {name} size {img.size}: H-Cuts={h_cuts}, V-Cuts={v_cuts}")
    
    # Generate sub-images
    count = 0
    for i in range(len(h_cuts) - 1):
        y1 = h_cuts[i]
        y2 = h_cuts[i+1]
        
        # Skip very thin slices (e.g. smaller than 60px)
        if y2 - y1 < 60:
            continue
            
        for j in range(len(v_cuts) - 1):
            x1 = v_cuts[j]
            x2 = v_cuts[j+1]
            
            if x2 - x1 < 60:
                continue
                
            # Crop the box, trim a small margin to remove any remaining border
            margin = 3
            box = (x1 + margin, y1 + margin, x2 - margin, y2 - margin)
            cropped = img.crop(box)
            
            # Save cropped image
            out_filename = f"look_{idx+1}_{count+1}.jpg"
            out_path = os.path.join(output_dir, out_filename)
            cropped.save(out_path, "JPEG", quality=95)
            print(f"  Saved sub-image to {out_path} (size: {cropped.size})")
            count += 1
