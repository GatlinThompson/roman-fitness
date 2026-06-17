import LiftForm from "@/components/forms/LiftForm";

type PageProps = {
  searchParams: Promise<{ date?: string; demo?: string }>;
};

export default async function page({ searchParams }: PageProps) {
  const params = await searchParams;
  const date = params.date;
  const isDemo = params.demo === "true";

  return (
    <div>
      <h1 className="text-center font-bold my-6 font-montserrat text-4xl">
        {isDemo ? "View Workout" : "Create Workout"}
      </h1>
      <LiftForm initialDate={date} isDemo={isDemo} />
    </div>
  );
}
