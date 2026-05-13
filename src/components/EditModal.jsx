// "use client";

// // import { Envelope } from "@gravity-ui/icons";
// import {
//   Button,
//   FieldError,
//   Input,
//   Label,
//   ListBox,
//   Modal,
//   Surface,
//   TextArea,
//   Select,
//   TextField,
// } from "@heroui/react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export function EditModal({ destination }) {
//   const {
//     _id,
//     destinationName,
//     country,
//     departureDate,
//     description,
//     category,
//     duration,
//     price,
//     imageUrl,
//   } = destination;
//   const router = useRouter();

//   const submitForm = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const destination = Object.fromEntries(formData.entries());

//     const res = await fetch(`https://127.0.0.1:5000/destination/${_id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(destination),
//     });

//     const data = await res.json();

//     console.log(data);

//     router.push("/destination");
//   };

//   return (
//     <div className="container mx-auto lg:w-1/2 w-full">
//       <form onSubmit={submitForm} className="p-10 space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Destination Name */}
//           <div className="md:col-span-2">
//             <TextField name="destinationName" defaultValue={destinationName}>
//               <Label>Destination Name</Label>
//               <Input placeholder="Bali Paradise" className="rounded-2xl" />
//             </TextField>
//           </div>

//           {/* Country */}
//           <TextField name="country" defaultValue={country}>
//             <Label>Country</Label>
//             <Input placeholder="Indonesia" className="rounded-2xl" />
//           </TextField>

//           {/* Category - Updated Select Component */}
//           <div>
//             <Select
//               name="category"
//               className="w-full"
//               placeholder="Select category"
//               defaultValue={category}
//             >
//               <Label>Category</Label>

//               <Select.Trigger className="rounded-2xl">
//                 <Select.Value />
//                 <Select.Indicator />
//               </Select.Trigger>

//               <Select.Popover>
//                 <ListBox>
//                   <ListBox.Item id="Beach" textValue="Beach">
//                     Beach
//                   </ListBox.Item>
//                   <ListBox.Item id="Mountain" textValue="Mountain">
//                     Mountain
//                   </ListBox.Item>
//                   <ListBox.Item id="City" textValue="City">
//                     City
//                   </ListBox.Item>
//                   <ListBox.Item id="Adventure" textValue="Adventure">
//                     Adventure
//                   </ListBox.Item>
//                   <ListBox.Item id="Cultural" textValue="Cultural">
//                     Cultural
//                   </ListBox.Item>
//                   <ListBox.Item id="Luxury" textValue="Luxury">
//                     Luxury
//                   </ListBox.Item>
//                 </ListBox>
//               </Select.Popover>
//             </Select>
//           </div>

//           {/* Price */}
//           <TextField name="price" type="number" defaultValue={price}>
//             <Label>Price (USD)</Label>
//             <Input type="number" placeholder="1299" className="rounded-2xl" />
//           </TextField>

//           {/* Duration */}
//           <TextField name="duration" defaultValue={duration}>
//             <Label>Duration</Label>
//             <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
//           </TextField>

//           {/* Departure Date */}
//           <div className="md:col-span-2">
//             <TextField
//               name="departureDate"
//               type="date"
//               defaultValue={departureDate}
//             >
//               <Label>Departure Date</Label>
//               <Input type="date" className="rounded-2xl" />
//             </TextField>
//           </div>

//           {/* Image URL - Removed preview */}
//           <div className="md:col-span-2">
//             <TextField name="imageUrl" defaultValue={imageUrl}>
//               <Label>Image URL</Label>
//               <Input
//                 type="url"
//                 placeholder="https://example.com/bali-paradise.jpg"
//                 className="rounded-2xl"
//               />
//             </TextField>
//           </div>

//           {/* Description */}
//           <div className="md:col-span-2">
//             <TextField name="description" defaultValue={description}>
//               <Label>Description</Label>
//               <TextArea
//                 placeholder="Describe the travel experience..."
//                 className="rounded-3xl"
//               />
//             </TextField>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center">
//           <Link href={`/destination/${_id}`} className="w-1/2">
//             <Button
//               variant="outline"
//               className="w-full rounded-none rounded-l-lg font-bold"
//             >
//               Cancel
//             </Button>
//           </Link>
//           <Button
//             type="submit"
//             //   isLoading={isPending}
//             className=" rounded-none rounded-r-lg w-1/2 bg-cyan-500 text-white font-bold"
//           >
//             Update
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";

export function EditModal({ destination }) {
  const {
    _id,
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    description,
    category,
    departureDate,
  } = destination;
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destination),
    });

    await res.json();
    router.push("/destination");
  };
  return (
    <Modal>
      <Button variant="outline" className={"rounded-lg"}>
        <BiEdit /> Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Destination</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="lg:p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                      >
                        <Label>Destination Name</Label>
                        <Input
                          placeholder="Bali Paradise"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField defaultValue={country} name="country" isRequired>
                      <Label>Country</Label>
                      <Input placeholder="Indonesia" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                      <Select
                        defaultValue={category}
                        name="category"
                        isRequired
                        className="w-full"
                        placeholder="Select category"
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
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Mountain" textValue="Mountain">
                              Mountain
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="City" textValue="City">
                              City
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Adventure" textValue="Adventure">
                              Adventure
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Cultural" textValue="Cultural">
                              Cultural
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">
                              Luxury
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      defaultValue={price}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label>Price (USD)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={duration}
                      name="duration"
                      isRequired
                    >
                      <Label>Duration</Label>
                      <Input
                        placeholder="7 Days / 6 Nights"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={departureDate}
                        name="departureDate"
                        type="date"
                        isRequired
                      >
                        <Label>Departure Date</Label>
                        <Input type="date" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="rounded-3xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center">
                    {" "}
                    <Button
                      variant="outline"
                      slot="close"
                      className="w-1/2 rounded-none rounded-l-lg font-bold"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="w-1/2 rounded-none rounded-r-lg font-bold"
                    >
                      Update
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
