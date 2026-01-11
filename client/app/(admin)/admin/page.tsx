import Main from "@/components/layout/Main";
import AdminLoginForm from "@/components/features/auth/AdminLoginForm";
import GlassContainer from "@/components/ui/glass_card/GlassContainer";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Roman Fitness | Admin",
};

export default function Admin() {
  return (
    <Main centered>
      <GlassContainer className="max-w-[420px]">
        <AdminLoginForm />
      </GlassContainer>
    </Main>
  );
}
