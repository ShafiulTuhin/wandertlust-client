"use client";

// import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  Select,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export function EditModal({ destination }) {
  // console.log(destination);

  const {
    _id,
    destinationName,
    country,
    departureDate,
    description,
    category,
    duration,
    price,
    imageUrl,
  } = destination;
  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    const res = await fetch(`http://127.0.0.1:5000/destination/${_id}/edit`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destination),
    });

    const data = await res.json();

    console.log(data);

    router.push("/destination");
  };

  return (
    <div className="container mx-auto lg:w-1/2 w-full">
      <form onSubmit={submitForm} className="p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField name="destinationName" defaultValue={destinationName}>
              <Label>Destination Name</Label>
              <Input placeholder="Bali Paradise" className="rounded-2xl" />
            </TextField>
          </div>

          {/* Country */}
          <TextField name="country" defaultValue={country}>
            <Label>Country</Label>
            <Input placeholder="Indonesia" className="rounded-2xl" />
          </TextField>

          {/* Category - Updated Select Component */}
          <div>
            <Select
              name="category"
              className="w-full"
              placeholder="Select category"
              defaultValue={category}
            >
              <Label>Category</Label>

              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Beach" textValue="Beach">
                    Beach
                  </ListBox.Item>
                  <ListBox.Item id="Mountain" textValue="Mountain">
                    Mountain
                  </ListBox.Item>
                  <ListBox.Item id="City" textValue="City">
                    City
                  </ListBox.Item>
                  <ListBox.Item id="Adventure" textValue="Adventure">
                    Adventure
                  </ListBox.Item>
                  <ListBox.Item id="Cultural" textValue="Cultural">
                    Cultural
                  </ListBox.Item>
                  <ListBox.Item id="Luxury" textValue="Luxury">
                    Luxury
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Price */}
          <TextField name="price" type="number" defaultValue={price}>
            <Label>Price (USD)</Label>
            <Input type="number" placeholder="1299" className="rounded-2xl" />
          </TextField>

          {/* Duration */}
          <TextField name="duration" defaultValue={duration}>
            <Label>Duration</Label>
            <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
          </TextField>

          {/* Departure Date */}
          <div className="md:col-span-2">
            <TextField
              name="departureDate"
              type="date"
              defaultValue={departureDate}
            >
              <Label>Departure Date</Label>
              <Input type="date" className="rounded-2xl" />
            </TextField>
          </div>

          {/* Image URL - Removed preview */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" defaultValue={imageUrl}>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-2xl"
              />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" defaultValue={description}>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-3xl"
              />
            </TextField>
          </div>
        </div>

        {/* Buttons */}

        <Button
          type="submit"
          variant="outline"
          //   isLoading={isPending}
          className=" rounded-none w-full bg-cyan-500 text-white"
        >
          {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
          Update
        </Button>
      </form>
    </div>
  );
}
