import z from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Please enter your first name",
  }),
  lastName: z.string().min(2, {
    message: "Please enter your last name",
  }),
  company: z.string(),
  country: z.string().min(2, {
    message: "Please select your country",
  }),
  streetAdd: z.string().min(2, {
    message: "Please enter your street address",
  }),
  townCity: z.string().min(2, {
    message: "Please enter your Town/City name",
  }),
  province: z.string().min(2, {
    message: "Please enter your province",
  }),
  zipCode: z.number().min(4, {
    message: "please enter you zip code",
  }),
  phone: z.string().refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value)),
//   phone: z.e164({
//     message: "Please enter your phone number",
//   }),
  email: z.email({ message: "Please enter your email address" }),
  additional: z.string(),
});

export const countries: string[] = [
    "Bangladesh",
    "India",
    "United States",
    "Canada",
    "Australia",
  ];

  export const provinces: string[] = [
    // Bangladesh
    "Dhaka",
    "Chattogram",
    "Khulna",
    "Rajshahi",
    "Sylhet",
    "Barishal",
    "Rangpur",
    "Mymensingh",

    // India
    "Maharashtra",
    "West Bengal",
    "Tamil Nadu",
    "Karnataka",
    "Uttar Pradesh",
    "Gujarat",

    // USA (States)
    "California",
    "New York",
    "Texas",
    "Florida",
    "Illinois",

    // Canada (Provinces)
    "Ontario",
    "British Columbia",
    "Quebec",
    "Alberta",
    "Manitoba",

    // Australia (States/Territories)
    "New South Wales",
    "Victoria",
    "Queensland",
    "Western Australia",
    "South Australia",
  ];

  export function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }