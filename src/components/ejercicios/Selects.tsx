import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { options } from "@/lib/data";

const Selects = () => {
  const [diasDeEstancia, setDiasDeEstancia] = useState<number | null>(null);
  const [precio, setPrecio] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<string>("");

  useEffect(() => {
    if (!selectedItem) return;

    const option = options.find((option) => option.title === selectedItem);

    if (option) {
      setPrecio(option.fn(diasDeEstancia));
    }
  }, [diasDeEstancia, selectedItem]);

  return (
    <div className="w-full flex flex-col items-center gap-4 p-4 relative">
      <Select
        onValueChange={(value) => {
          setSelectedItem(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Elige una opción" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option.title}
                value={option.title}
                className="w-[180px]"
              >
                {option.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <p>Días de estancia:</p>
      <Input
        onChange={(e) => {
          setDiasDeEstancia(parseInt(e.target.value));
        }}
        type="number"
        value={diasDeEstancia?.toString()}
        placeholder="0"
        className="w-[180px]"
      />
      <p>El precio total es: {precio}€</p>
    </div>
  );
};

export default Selects;
