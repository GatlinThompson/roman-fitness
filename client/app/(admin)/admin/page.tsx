import Main from "@/components/layout/Main";
import AdminLoginForm from "@/components/features/auth/AdminLoginForm";
import GlassContainer from "@/components/ui/glass_card/GlassContainer";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { getUser } from "@/lib/supabase/utils/getUser";
import { redirect } from "next/dist/client/components/navigation";

export const metadata: Metadata = {
  title: "Roman Fitness | Admin",
};

export default async function Admin() {
  const user = await getUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <Main centered>
      <GlassContainer className="max-w-[420px]">
        <AdminLoginForm />
      </GlassContainer>
    </Main>
  );
}
