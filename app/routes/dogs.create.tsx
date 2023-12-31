import type { DataFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm, validationError } from "remix-validated-form";
import { route } from "routes-gen";
import { z } from "zod";

import { Input } from "~/components/Input";
import { db } from "~/db/config.server";
import { dogs } from "~/db/schema.server";

const validator = withZod(
  z.object({
    name: z.string().min(1).max(34),
    breed: z.string().min(1).max(34),
  })
);

export const loader = () => {
  return json({
    defaultValues: {
      name: "",
      breed: "",
    },
  });
};

export const action = async ({ request }: DataFunctionArgs) => {
  const fieldValues = await validator.validate(await request.formData());
  if (fieldValues.error) return validationError(fieldValues.error);

  db.insert(dogs).values(fieldValues.data).run();

  return redirect(route("/dogs"));
};

export default function DogInsertion() {
  const { defaultValues } = useLoaderData<typeof loader>();

  return (
    <div className="flex justify-center items-center h-screen">
  <div className="mt-0">
    <div className="mb-8">
      <h2 className="mb-2 text-xl">Add a new Dog</h2>
      <p className="text-gray-600">Add your dog's name and breed</p>
    </div>

    <ValidatedForm
      className="space-y-6"
      method="POST"
      validator={validator}
      defaultValues={defaultValues}
    >
      <Input name="name" label="Name" placeholder="Name" />
      <Input name="breed" label="Breed" placeholder="Breed" />

      <button className="btn btn-accent" type="submit">
        Submit
      </button>
    </ValidatedForm>
  </div>
</div>
  );
}
