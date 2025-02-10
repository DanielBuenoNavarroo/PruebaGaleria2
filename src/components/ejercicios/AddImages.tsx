import { useState } from "react";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddImages = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);
  const [image, setImage] = useState<string>("");

  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.length ? (
          images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={"imagen " + i}
              className={`w-40 h-40 object-cover ${
                selectedImage === i ? "border-2 border-red-500" : ""
              }`}
              onClick={() => setSelectedImage(i)}
            />
          ))
        ) : (
          <div>No hay imagenes para mostar</div>
        )}
      </div>
      <Separator className="my-4 max-w-80" />
      <Input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Introduce la url de una imagen"
        className="w-80"
      />
      <Button
        onClick={() => {
          setImages([...images, image]);
          setImage("");
        }}
        variant={"outline"}
        className="mt-4"
      >
        Submit
      </Button>
      <Separator className="my-4 max-w-80" />
      {images.length > 0 && (
        <img
          src={images[selectedImage]}
          alt={"imagen " + selectedImage}
          width={400}
          height={400}
          className="w-80 h-80 object-cover"
        />
      )}
      <div className="flex gap-4 p-4">
        {selectedImage > 0 && (
          <Button onClick={() => setSelectedImage(selectedImage - 1)}>
            Anterior
          </Button>
        )}
        {selectedImage < images.length - 1 && (
          <Button onClick={() => setSelectedImage(selectedImage + 1)}>
            Siguiente
          </Button>
        )}
      </div>
    </div>
  );
};

export default AddImages;
