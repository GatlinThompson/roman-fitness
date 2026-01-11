import Main from "@/components/layout/Main";
import AdminLoginForm from "@/components/features/auth/AdminLoginForm";
import GlassContainer from "@/components/ui/glass_card/GlassContainer";

export default function Admin() {
  return (
    <Main centered>
      <GlassContainer className="max-w-[420px]">
        <AdminLoginForm />
      </GlassContainer>
    </Main>
  );
}
