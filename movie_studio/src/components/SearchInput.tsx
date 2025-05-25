"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Form, FormField, FormItem, FormControl } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  input: z.string().min(2).max(30),
});

type FormSchema = z.infer<typeof formSchema>;

const SearchInput = () => {
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push(`/search/${values.input}`);
    form.reset();
  };

  

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-white space-y-1"
      >
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search ..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchInput;
