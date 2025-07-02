import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../utils/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { createPost } from "../api/users";

const Contact = () => {
  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      title: "",
      age: "",
      city: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    try {
      const response = await createPost(data);
      if (response) {
        console.log("response", response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Contact</h2>
      <Form {...contactForm}>
        <form onSubmit={contactForm.handleSubmit(onSubmit)}>
          {/* Name */}
          <FormField
            control={contactForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Age */}
          <FormField
            control={contactForm.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="age"
                    placeholder="Enter your age"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City */}
          <FormField
            control={contactForm.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="city"
                    placeholder="Enter your city"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
