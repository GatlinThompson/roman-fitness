import Main from "@/components/layout/Main";
import AdminLoginForm from "./_components/AdminLoginForm";
import GlassContainer from "@/components/ui/GlassContainer";

export default function Admin() {
  return (
    <Main centered>
      <GlassContainer className="max-w-[420px]">
        <AdminLoginForm />
      </GlassContainer>
    </Main>
  );
}
